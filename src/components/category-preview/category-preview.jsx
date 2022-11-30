import "./category-preview.scss";
import ProductCard from "../product-card/product-card";
import { Link } from "react-router-dom";

const CategoryPreview = ({title, products}) => {
  return(
    <div className="category-preview-container">
      <Link to={title}><h2>{title}</h2></Link>
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default CategoryPreview;
