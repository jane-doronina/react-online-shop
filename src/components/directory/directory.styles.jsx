import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 20px 40px 40px;
  column-gap: 15px;
  row-gap: 15px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 20px;
  }
`
