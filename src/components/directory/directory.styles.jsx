import styled from 'styled-components';

export const CategoriesContainer = styled.div`
    width: 100%;
    display: grid;
    justify-content: space-between;
    margin-top: 65px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
