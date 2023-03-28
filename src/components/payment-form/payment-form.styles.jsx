import styled from "styled-components";

export const PaymentFormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: #f4f4f4;
margin-top: 20px;
`

export const FormContainer = styled.form`
  min-width: 500px;

  h2 {
    margin-bottom: 30px;
  }

  button {
    margin-top: 20px;
  }

  @media screen and (max-width: 500px) {
    min-width: unset;
  }
`
