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
    -webkit-transform: translateX(-130%);
    transform: translateX(-130%);
  }
`

const tickerAnimationMobile = keyframes`
  0% {
    transform: translateX(100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(-300%);
    transform: translateX(-420%);
  }
`

export const TickerMWrap = styled.div`
  display: flex;
  white-space: nowrap;
  ${'' /* padding-right: 100%; */}
  box-sizing: content-box;
  animation: ${tickerAnimation1} 40s linear infinite;
  animation-delay: -10s;

  &:hover {
    animation-play-state: paused;
  }

  @media screen and (max-width: 600px) {
    animation: ${tickerAnimationMobile} 30s linear infinite;
  }
`

export const TickerItem = styled.div`
  flex-shrink: 0;
  width: 50%;
  padding: 10px;
  text-align: center;

  @media screen and (max-width: 600px) {
    width: 150%;
    padding: 7px;
    font-size: 0.9rem;
  }
`
