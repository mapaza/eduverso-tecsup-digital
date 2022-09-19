import styled from 'styled-components';
import ContactForm from '../ContactForm'

import ShowMore from '../Services/ShowMore';


export const Form = styled(ContactForm)`
  button {
    color: black;
  }

  .circle {
    background: black !important;
    color: white !important;
  }
`;


export const Container = styled.div`
  min-height:100vh;
  padding:  80px 5vh 80px;
  position: relative;
  display: flex;
  background: white;
  align-items: center;
  flex-direction: column-reverse;

  @media only screen and (min-width : 920px) {
    padding:  0px 5vh 0;
    flex-direction: row;
  }

  .cuerpo{ 
    display: flex;
    padding: 20px 0;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%;

    @media only screen and (min-width : 992px) {
      width: 50%;
      padding:0;
    }
  }

  .titulo {
    flex: 1;
    text-align: center;
    font-size: 8vw; 
    line-height: 8.3vw;
    font-weight: bold;
    margin-bottom: 1vw;

    @media only screen and (min-width : 992px) {
      font-size: 4vw; 
      line-height: 4.3vw;
      }

      /* Large Devices, Wide Screens */
      @media only screen and (min-width : 1200px) {
        font-size: 2vw; 
        line-height: 2.3vw;
      }
  }
`;


export const WrapperVideo = styled.div`
`;



export const Location = styled.div`
  width: 100%;
  margin-bottom: 4vw;

  @media only screen and (min-width : 920px) {
    width: 50%;
    margin-left: 8vw;
    margin-bottom: 0vw;
  }
  .title {
    font-size: 38px;
    line-height: 48px;
    font-weight: 700;
    margin-bottom: 1vw;
  }
`;

export const Campus = styled.div`
  width: 100%;
  margin-bottom: 1vw;

  .campus {
    font-weight: 500;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 0.5vw;
    line-height: 30px;
  }

  .address, .phone {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;

    span {
      font-weight: 500;
    }
  }
`;


export const SurveyButton = styled(ShowMore)`
  align-self: center;
  margin-top: 2vw;
  .wrapper {
    color: black;
  }

  .circle{
    color: white;
    background: black
  }
  /* background: red; */
` 
