import { useState } from "react";
import {signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const SignInWithGoogle = async () => {
        await signInWithGooglePopup();
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await signInAuthUserWithEmailAndPassword(
                email,
                password
                );
            resetFormFields();
        } catch (error) {
            switch(error.code)
            {
                case 'auth/wrong-password':
                    alert('Senha Incorrecta.')
                    break;
                case 'auth/user-not-found':
                    alert('E-mail não registado')
                    break;
                default:
                    console.log(error.code)
            }
            if (error.code === 'auth/wrong-password') {
                alert('Senha Incorrecta.')
            }
            else 
            {
                console.log('User creation encountered an error', error);
            }

        }

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-in-form-container">
            <h2>Já tens uma conta?</h2>
            <span>Entra com o teu e-mail e senha</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Endereço eletrónico" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Senha" type="password" required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button type="submit">Entrar</Button>
                    <Button type="button" buttonType='google' onClick={SignInWithGoogle}>Entrar com a conta do Google</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;