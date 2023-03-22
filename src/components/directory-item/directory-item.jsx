import { DirectoryItemContainer, CategoryBody, BackgroundImage } from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({category}) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
  <DirectoryItemContainer onClick={onNavigateHandler}>
    <BackgroundImage imageUrl={imageUrl} />
    <CategoryBody>
      <h2>SHOP {title}</h2>
    </CategoryBody>
  </DirectoryItemContainer>
  );
}

export default DirectoryItem;
