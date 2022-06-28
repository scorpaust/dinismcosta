import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpFormContainer} from './sign-up-form.styles';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword)
        {
            alert('Password do not match')
            return;
        }
        
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName});
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create User. E-mail already in use.')
            }
            else 
            {
                console.log('User creation encountered an error', error);
            }

        }

    }

    return (
        <SignUpFormContainer>
            <h2>Não tens uma conta?</h2>
            <span>Regista-te com o teu e-mail e senha</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Nome" type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="Endereço eletrónico" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Senha" type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput label="Confirmar Senha" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button type="submit">Registar </Button>
            </form>
        </SignUpFormContainer>
    );
}

export default SignUpForm;