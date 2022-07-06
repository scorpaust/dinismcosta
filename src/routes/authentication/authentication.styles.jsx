import styled from 'styled-components';

export const AuthenticatioContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 900px;
    margin: 30px auto;

    @media (max-width: 600px) {
        display: grid;
        row-gap: 10px;
        grid-template-column: repeat(1, 1fr);
    }
`;