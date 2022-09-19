import styled from 'styled-components';
// import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding:  0 6vw;
  justify-content: center;


     

`;


export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    transition: height 0.3s ease;
  }

  & > div > p:first-child{
    font-size: 10.6vw;
    line-height: 10.9vw;

    @media only screen and (min-width : 992px) {
      font-size: 8vw; 
      line-height: 8.3vw;
    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 6vw; 
      line-height: 6.3vw;
    }
  }

  & > div > p:nth-child(2){
    width: 100%;
  }


  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    width: 75%;

    & > .wrapper-text{
      height: 272px;
    }
  }

  @media only screen and (min-width : 1200px) {
    width: 65%;

    & > .wrapper-text{
      height: auto;
    }
  }
`;


export const IconsLayer = styled.div`
  display: flex;
  margin-top: 12px;

  .circle{
    margin: 0;
    border: 1px solid white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 5s opacity;
  }
  .active {
    opacity: 1;
    cursor: default;
  }
  a + a{
    margin-left: 10px;
  }
  svg {
    fill: white;
    width: 36px;
    height: 36px;
    stroke: white;
    stroke-width: 1;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;




