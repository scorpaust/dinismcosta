import styled from 'styled-components';

export const CategoriesContainer = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    margin: 0 auto;
    margin-top: 65px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;
