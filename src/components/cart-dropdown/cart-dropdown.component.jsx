import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCurrentUser } from '../../store/user/user.selector';

const CartDropdown = () => {

    const cartItems  = useSelector(selectCartItems);

    const currentUser = useSelector(selectCurrentUser);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/finalizar-compra');
    }

    const goToAuthenticateHandler = () => {
        navigate('/autenticacao');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) : (
                        <EmptyMessage>Carrinho Vazio</EmptyMessage>
                    )
                }
                
            </CartItems>
            {
                currentUser ? <Button onClick={goToCheckoutHandler}>FINALIZAR COMPRA</Button> :
                <Button onClick={goToAuthenticateHandler}>AUTENTICAR</Button>
            }
        </CartDropdownContainer>
    )
}


export default CartDropdown;