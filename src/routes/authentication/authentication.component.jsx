/* eslint-disable react-hooks/exhaustive-deps */
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticatioContainer } from './authentication.styles';

const Authentication = () => {


    return (
        <AuthenticatioContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticatioContainer>
    );
}

export default Authentication;