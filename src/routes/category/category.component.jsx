import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CategoryContainer, CategoryTitle } from './category.styles';
import ServiceCard from '../../components/service-card/service-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';


const Category = () => {
    const { category } = useParams(); 
    const categoriesMap = useSelector(selectCategoriesMap);
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