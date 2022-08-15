import styled from 'styled-components';


export const SignInFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 480px;

    h2 {
        margin: 10px 0;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    

    @media (max-width: 600px) {
        display: grid;
    width: 300px;
    row-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    }
`;