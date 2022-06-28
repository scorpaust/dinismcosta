import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import { useParams } from 'react-router-dom';
import { CategoryContainer, CategoryTitle } from './category.styles';
import ServiceCard from '../../components/service-card/service-card.component';


const Category = () => {
    const { category } = useParams(); 
    const { categoriesMap } = useContext(CategoriesContext);
    const [services, setServices] = useState(categoriesMap[category]);
    
    
    useEffect(() => {
        setServices(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>      
                {services &&
                    services.map((service) => <ServiceCard key={service.id} service={service} />)
                }
            </CategoryContainer>
        </Fragment>
    )
}


export default Category;