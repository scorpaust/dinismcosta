import { useMemo, useState } from 'react';

import SERVICES_DATA from '../../services-data';

import {
  ContactFooterContainer,
  ContactForm,
  CopyRightNotice,
  FieldControl,
  FieldLabel,
  FieldHint,
  FeedbackMessage,
  FooterTitle,
  InputControl,
  MessageCounter,
  SelectControl,
  SubmitButton,
  TextAreaControl,
} from './contact-footer.styles';

const MESSAGE_MAX_LENGTH = 2500;
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/dinismiguelcosta@hotmail.com';

const defaultFormValues = {
  name: '',
  contact: '',
  services: [],
  message: '',
};

const ContactFooter = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [feedback, setFeedback] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableServices = useMemo(() => {
    const serviceNames = SERVICES_DATA.flatMap(
      (serviceGroup) => serviceGroup.items?.map((item) => item.name) ?? []
    );

    return Array.from(new Set(serviceNames)).sort((first, second) =>
      first.localeCompare(second, 'pt-PT', { sensitivity: 'base' })
    );
  }, []);

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
        status: 'error',
        message: 'Por favor, preencha o nome e os contactos.',
      });
      return;
    }

    if (!formValues.message.trim()) {
      setFeedback({
        status: 'error',
        message: 'Escreva a sua mensagem antes de enviar.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const trimmedName = formValues.name.trim();
      const trimmedContact = formValues.contact.trim();
      const trimmedMessage = formValues.message.trim();
      const servicesSummary =
        formValues.services.length > 0
          ? formValues.services.join(', ')
          : 'Não indicado';

      const payload = {
        Nome: trimmedName,
        Contactos: trimmedContact,
        'Serviços pretendidos': servicesSummary,
        Mensagem: trimmedMessage,
        _subject: 'Novo pedido de orçamento',
        _captcha: 'false',
        _template: 'table',
      };

      if (trimmedContact.includes('@')) {
        payload._replyto = trimmedContact;
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);
      const isSuccessful =
        result?.success === 'true' || result?.success === true;

      if (!response.ok || !isSuccessful) {
        throw new Error('Não foi possível enviar o pedido.');
      }

      setFeedback({
        status: 'success',
        message: 'Obrigado! O seu pedido foi enviado com sucesso.',
      });
      resetForm();
    } catch (error) {
      setFeedback({
        status: 'error',
        message:
          'Ocorreu um problema ao enviar o pedido. Por favor, tente novamente mais tarde.',
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
            title="Selecione um ou mais serviços"
          >
            {availableServices.map((serviceName) => (
              <option key={serviceName} value={serviceName}>
                {serviceName}
              </option>
            ))}
          </SelectControl>
          <FieldHint>
            Selecione um ou mais serviços (mantenha Ctrl ou Cmd premido para
            escolhas múltiplas).
          </FieldHint>
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
          {isSubmitting ? 'A enviar…' : 'Enviar Pedido'}
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