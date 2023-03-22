import styled, { keyframes } from "styled-components";

export const TickerWrap = styled.div`
  overflow: hidden;
  background: black;
  margin-bottom: 20px;
  color: white;
  box-sizing: content-box;
`

const tickerAnimation1 = keyframes`
  0% {
    transform: translateX(100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
`

const tickerAnimation2 = keyframes`
  0% {
    transform: translateX(0%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
`

export const TickerMWrap = styled.div`
  display: flex;
  white-space: nowrap;
  ${'' /* padding-right: 100%; */}
  box-sizing: content-box;
  animation: ${tickerAnimation1} 20s linear infinite;
  animation-delay: -10s;

  &:hover {
    animation-play-state: paused;
  }
`

export const TickerItem = styled.div`
  flex-shrink: 0;
  width: 50%;
  padding: 10px;
  text-align: center;
`
