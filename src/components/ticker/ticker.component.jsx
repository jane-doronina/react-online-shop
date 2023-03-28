import { TickerWrap, TickerMWrap, TickerItem } from "./ticker.styles"
import { LinkWithHover } from "../footer/footer.styles";

const Ticker = () => {
  return(
    <TickerWrap>
      <TickerMWrap>
        <TickerItem><p><span>FREE STANDARD UK DELIVERY</span> ON ORDERS ABOVE £50</p></TickerItem>
        <TickerItem><p><LinkWithHover to="/shop/womens" color="white"><span>JEANS AND TROUSERS</span></LinkWithHover> – <span>30% OFF.</span> 2 DAYS ONLY</p></TickerItem>
        <TickerItem><p>STUDENTS GET <span>20% OFF EVERYTHING</span></p></TickerItem>
      </TickerMWrap>
    </TickerWrap>
  )
}

export default Ticker;
