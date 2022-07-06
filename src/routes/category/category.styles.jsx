import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: grid;
    column-gap: 20px;
    row-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const CategoryTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
    text-align: center;
`;
