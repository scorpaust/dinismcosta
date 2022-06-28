import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../context/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const services = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} services={services} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;