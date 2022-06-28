import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #A6EBC9;
  color: #A6B1E1;
  text-transform: uppercase;
  font-family: 'Oswald', 'sans serif';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #DCD6F7;
    color: #3E92CC;
    border: 1px solid #444554;
  }
`
export const GoogleSignInButton = styled(BaseButton)`
  background-color: #3E92CC;
  color: #A6EBC9;

  &:hover {
    background-color: #A6B1E1;
    color: #444554;
    border: none;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #444554;
  border: 1px solid #444554;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`