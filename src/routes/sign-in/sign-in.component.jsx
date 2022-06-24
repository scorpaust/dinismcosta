/* eslint-disable react-hooks/exhaustive-deps */
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return (
        <div>
            <h1>Página de Autenticação</h1>
            <button onClick={logGoogleUser}>Entrar com a conta do Google</button>
            <SignUpForm />
        </div>
    );
}

export default SignIn;