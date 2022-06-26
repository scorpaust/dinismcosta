import Button from "../button/button.component";
import './service-card.styles.scss';

const ServiceCard = ({ service }) => {
    const { name, imageUrl, price } = service;
    return (
        <div className="service-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted'>Adicionar ao Carrinho</Button>
        </div>
    );
}

export default ServiceCard;