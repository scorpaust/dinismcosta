import { CategoryPreviewContainer, Title, Preview } from  './category-preview.styles';
import ServiceCard from '../service-card/service-card.component';

const CategoryPreview = ({ title, services }) => (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {services
          .slice(0,6)
          .map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );

export default CategoryPreview;