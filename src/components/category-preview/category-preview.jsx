import ProductCard from "../product-card/product-card";
import { ProductsContainer, CategoriesPreviewContainer, Title } from "./category-preview.styles";

const CategoryPreview = ({title, products}) => {
  return(
    <CategoriesPreviewContainer>
      <Title to={title}><h2>{title}</h2></Title>
      <ProductsContainer>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </ProductsContainer>
    </CategoriesPreviewContainer>
  )
}

export default CategoryPreview;
