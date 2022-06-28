import {DirectoryItemContainer, BackgroundImage, DirectoryItemBodyContainer } from './directory-item.styles'
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {

    const { id, title, subtitle, imageUrl, route } = category

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
        <DirectoryItemBodyContainer>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </DirectoryItemBodyContainer>
      </DirectoryItemContainer> 
    )
}

export default DirectoryItem;