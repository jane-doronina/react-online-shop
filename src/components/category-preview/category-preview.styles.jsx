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

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Title = styled(Link)`
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  h2 {
    font-size: 2.3rem;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.3rem;
    }
  }
`;
