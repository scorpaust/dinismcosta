import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 300px;
  padding: 15px;
  text-decoration: none;
`
export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer; 
`

export const LogoText = styled.div`
  font-family: 'Parisienne';
  font-size: 45px;
  font-weight: w950;
  color: #A6B1E1;
`