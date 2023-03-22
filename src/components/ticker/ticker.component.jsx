import { TickerWrap, TickerMWrap, TickerItem } from "./ticker.styles"

const Ticker = () => {
  return(
    <TickerWrap>
      <TickerMWrap>
        <TickerItem><strong>FREE STANDARD UK DELIVERY</strong> ON ORDERS ABOVE £50</TickerItem>
        <TickerItem>JEANS AND TROUSERS – <strong>30% OFF.</strong> 2 DAYS ONLY</TickerItem>
        <TickerItem>STUDENTS GET <strong>20% OFF EVERYTHING</strong></TickerItem>
      </TickerMWrap>
    </TickerWrap>
  )
}

export default Ticker;
