import styled from 'styled-components';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  color: #444554;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingBagOutlinedIcon)`
  width: 40px;
  height: 40px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;