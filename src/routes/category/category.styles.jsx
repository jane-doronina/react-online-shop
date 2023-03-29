import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  padding: 20px 40px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }
`
export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 2.5rem;
`
