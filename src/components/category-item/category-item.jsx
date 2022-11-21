import "./category-item.scss";

const CategoryItem = ({category}) => {
  const { title, imageUrl } = category;
  return (
  <div className="category-container" style={{backgroundImage: `url(${imageUrl})`}}>
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop now</p>
    </div>
  </div>
  );
}

export default CategoryItem;
