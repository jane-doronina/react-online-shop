import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview";


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
    {Object.keys(categoriesMap).map((categoryTitle) => {
      const products = categoriesMap[categoryTitle].slice(0,4);
      return <CategoryPreview key={categoryTitle} title={categoryTitle} products={products}/>
    })}
    </div>
  )
}

export default CategoriesPreview;
