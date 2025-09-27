import { useMemo, useState } from "react";

import SERVICES_DATA from "../../services-data";

import {
  ContactFooterContainer,
  ContactForm,
  CopyRightNotice,
  FieldControl,
  FieldLabel,
  FeedbackMessage,
  FooterTitle,
  InputControl,
  MessageCounter,
  SelectControl,
  SubmitButton,
  TextAreaControl,
} from "./contact-footer.styles";

const MESSAGE_MAX_LENGTH = 2500;

const defaultFormValues = {
  name: "",
  contact: "",
  services: [],
  message: "",
};

const ContactFooter = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [feedback, setFeedback] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableServices = useMemo(
    () =>
      SERVICES_DATA.flatMap(
        (serviceGroup) => serviceGroup.items?.map((item) => item.name) ?? []
      ),
    []
  );

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleServicesChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option) => option.value
    );

    setFormValues((previous) => ({
      ...previous,
      services: selectedOptions,
    }));
  };

  const resetForm = () => {
    setFormValues(defaultFormValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFeedback(null);

    if (!formValues.name.trim() || !formValues.contact.trim()) {
      setFeedback({
        status: "error",
        message: "Por favor, preencha o nome e os contactos.",
      });
      return;
    }

    if (!formValues.message.trim()) {
      setFeedback({
        status: "error",
        message: "Escreva a sua mensagem antes de enviar.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.name.trim(),
          contact: formValues.contact.trim(),
          services: formValues.services,
          message: formValues.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Não foi possível enviar o pedido.");
      }

      setFeedback({
        status: "success",
        message: "Obrigado! O seu pedido foi enviado com sucesso.",
      });
      resetForm();
    } catch (error) {
      setFeedback({
        status: "error",
        message:
          "Ocorreu um problema ao enviar o pedido. Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactFooterContainer>
      <FooterTitle>Solicitar Orçamento</FooterTitle>
      <ContactForm onSubmit={handleSubmit} noValidate>
        <FieldControl>
          <FieldLabel htmlFor="contact-name">Nome</FieldLabel>
          <InputControl
            id="contact-name"
            name="name"
            value={formValues.name}
            onChange={handleFieldChange}
            placeholder="O seu nome"
            required
          />
        </FieldControl>
        <FieldControl>
          <FieldLabel htmlFor="contact-info">Contactos</FieldLabel>
          <InputControl
            id="contact-info"
            name="contact"
            value={formValues.contact}
            onChange={handleFieldChange}
            placeholder="Email ou telefone"
            required
          />
        </FieldControl>
        <FieldControl>
          <FieldLabel htmlFor="contact-services">
            Serviços pretendidos
          </FieldLabel>
          <SelectControl
            id="contact-services"
            name="services"
            multiple
            value={formValues.services}
            onChange={handleServicesChange}
          >
            {availableServices.map((serviceName) => (
              <option key={serviceName} value={serviceName}>
                {serviceName}
              </option>
            ))}
          </SelectControl>
        </FieldControl>
        <FieldControl>
          <FieldLabel htmlFor="contact-message">Mensagem</FieldLabel>
          <TextAreaControl
            id="contact-message"
            name="message"
            value={formValues.message}
            onChange={handleFieldChange}
            placeholder="Descreva o seu projeto (máximo 2500 caracteres)"
            maxLength={MESSAGE_MAX_LENGTH}
            rows={6}
            required
          />
          <MessageCounter>
            {formValues.message.length}/{MESSAGE_MAX_LENGTH}
          </MessageCounter>
        </FieldControl>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "A enviar…" : "Enviar Pedido"}
        </SubmitButton>
        {feedback && (
          <FeedbackMessage status={feedback.status}>
            {feedback.message}
          </FeedbackMessage>
        )}
      </ContactForm>
      <CopyRightNotice>
        © {new Date().getFullYear()} Dinis Miguel Costa. Direitos reservados a
        favor de Dinis Miguel Costa.
      </CopyRightNotice>
    </ContactFooterContainer>
  );
};

export default ContactFooter;
