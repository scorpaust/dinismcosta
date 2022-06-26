import Button from "../button/button.component";
import './service-card.styles.scss';
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ServiceCard = ({ service }) => {
    const { name, imageUrl, price } = service;

    const { addItemToCart } = useContext(CartContext);

    const addServiceToCart = () => addItemToCart(service);

    return (
        <div className="service-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addServiceToCart} >Adicionar ao Carrinho</Button>
        </div>
    );
}

export default ServiceCard;