import styled from "styled-components";

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 40px 0;

    h2, span {
      text-align: center;
    }
  }
`
