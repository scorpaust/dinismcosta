import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: start:
    align-items: start;
    justify-content: start;
`

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
`

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;

    @media (max-width: 600px) {
        display: grid;
        width: 120px;
        justify-content: end;
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
        margin-top: 35px;
        margin: 0 auto;
    }
`
