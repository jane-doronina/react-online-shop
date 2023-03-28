import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 50%;
  margin: 50px auto;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 20px 30px;
    margin: 30px auto;

    h3 {
      margin-top: 0;
    }
  }
`

// export const CheckoutHeadings = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//   border-bottom: 1px solid grey;
//   padding-bottom: 10px;
// `

export const TotalPrice = styled.div`
  text-align: right;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  margin-top: 20px;
  background-color: #f4f4f4;
  padding: 10px;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`
