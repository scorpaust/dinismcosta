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
  align-items: center;

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

export const ButtonSpinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(166, 235, 201, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
