import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutContainer } from './checkout.styles';

const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <div className='checkout-header'>
                <div className="header-block">
                    <span>Serviço</span>
                </div>
                <div className="header-block">
                    <span>Descrição</span>
                </div>
                <div className="header-block">
                    <span>Quantidade</span>
                </div>
                <div className="header-block">
                    <span>Preço</span>
                </div>
                <div className="header-block">
                    <span>Remover</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => {
                    const { id } = cartItem;
                    return <CheckoutItem key={id} cartItem={cartItem}/>
                    
                })
            }
            <span className='total'>Total: {cartTotal},00 €</span>
        </CheckoutContainer>
    )
}

export default Checkout;