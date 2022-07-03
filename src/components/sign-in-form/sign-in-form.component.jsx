import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignInFormContainer, ButtonsContainer } from  './sign-in-form.styles';
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const SignInWithGoogle = async () => {
        dispatch(googleSignInStart())
        navigate("/", { replace: true });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            dispatch(emailSignInStart(
                email,
                password
                ));
            resetFormFields();
            navigate("/", { replace: true });
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
        <SignInFormContainer>
            <h2>Já tens uma conta?</h2>
            <span>Entra com o teu e-mail e senha</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Endereço eletrónico" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Senha" type="password" required onChange={handleChange} name="password" value={password} />
                <ButtonsContainer>
                    <Button type="submit">Entrar</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle}>Entrar com a conta do Google</Button>
                </ButtonsContainer>
            </form>
        </SignInFormContainer>
    );
}

export default SignInForm;