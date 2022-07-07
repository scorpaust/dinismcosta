import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  margin: auto;
  justify-contents: center;
  align-items: flex-end;
  margin-left: 25px;
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left: 0px;
  align-items: center;
  text-decoration: none;
`
export const NavLinksContainer = styled.div`
  margin-right: 20px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer; 
`

export const LogoText = styled.div`
  display: grid;
  align-items: start;
  justify-content: center;
  font-family: 'Parisienne';
  font-size: 25px;
  font-weight: w950;
  color: #A6B1E1;
  text-align: left;

  @media (min-width: 900px) {
    font-size: 35px;
  }
`