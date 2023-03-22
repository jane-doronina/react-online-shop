import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CategoryBody = styled.div`
  height: auto;
  width: auto;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: absolute;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 18px;

    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    margin: 5px 0;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 300px;
  flex: 1 1 auto;
  grid-column: auto / span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:nth-child(n + 4) {
    grid-column: auto / span 3;
    height: 330px;
  }

  &:hover {
    cursor: pointer;
    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
`;
