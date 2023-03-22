import CategoryItem from "../directory-item/directory-item";
import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1668046095310-37d901cf7e7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
    "route": "shop/hats"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80",
    "route": "shop/jackets"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
    "route": "shop/sneakers"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "route": "shop/womens"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
    "route": "shop/mens"
  }
]

const Directory = () => {

  return (
  <DirectoryContainer>
  {categories.map((category) => <CategoryItem key={category.id} category={category} />)}
  </DirectoryContainer>
  );
}

export default Directory;
