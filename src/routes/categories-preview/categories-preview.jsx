import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview";
import { ShopContainer } from "./categories-preview.styles";


const CategoriesPreview = () => {
  const categoriesMap = useSelector((state) => state.categories.categoriesMap)

  return (
    <ShopContainer>
    {Object.keys(categoriesMap).map((categoryTitle) => {
      const products = categoriesMap[categoryTitle].slice(0,4);
      return <CategoryPreview key={categoryTitle} title={categoryTitle} products={products}/>
    })}
    </ShopContainer>
  )
}

export default CategoriesPreview;
