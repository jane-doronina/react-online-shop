import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoriesPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const ProductsContainer = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 20px;
`

export const Title = styled(Link)`
  font-size: 22px;
  cursor: pointer;
`;
