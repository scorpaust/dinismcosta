import { useContext } from "react";
import { ServicesContext } from "../../context/services.context";
import ServiceCard from "../../components/service-card/service-card.component";
import './services.styles.scss';

const Services = () => {

    const { services } = useContext(ServicesContext); 

    return (
        <div className='services-container'>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
    )
}

export default Services;