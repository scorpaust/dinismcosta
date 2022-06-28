import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {ServiceCardContainer} from './service-card.styles';
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ServiceCard = ({ service }) => {
    const { name, imageUrl, price } = service;

    const { addItemToCart } = useContext(CartContext);

    const addServiceToCart = () => addItemToCart(service);

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