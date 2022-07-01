import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart} from "../../store/cart/cart.action";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {ServiceCardContainer} from './service-card.styles';

const ServiceCard = ({ service }) => {
    const { name, imageUrl, price } = service;

    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    const addServiceToCart = () => dispatch(addItemToCart(cartItems, service));

    return (
        <ServiceCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{`${price},00 €`}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addServiceToCart} >Adicionar ao Carrinho</Button>
        </ServiceCardContainer>
    );
}

export default ServiceCard;