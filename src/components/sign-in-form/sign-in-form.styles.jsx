import styled from "styled-components";

export const SignInFormContainer = styled.div`
  width: 430px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    h2, span {
      text-align: center;
      display: inline-block;
      width: 100%;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: auto;
    height: 110px;

    button {
      min-width: 254px;
    }
  }
`
