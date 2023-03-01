import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview";


const CategoriesPreview = () => {
  const categoriesMap = useSelector((state) => state.categories.categoriesMap)

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
