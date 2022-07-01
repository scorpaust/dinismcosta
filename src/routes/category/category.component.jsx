import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CategoryContainer, CategoryTitle } from './category.styles';
import ServiceCard from '../../components/service-card/service-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';


const Category = () => {
    const { category } = useParams(); 
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [services, setServices] = useState(categoriesMap[category]);
    
    
    useEffect(() => {
        setServices(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <CategoryContainer>      
                        {services &&
                            services.map((service) => <ServiceCard key={service.id} service={service} />)
                        }
                    </CategoryContainer>
                )
            }
        </Fragment>
    )
}


export default Category;