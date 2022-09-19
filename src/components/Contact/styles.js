import styled from 'styled-components';
import ShowMore from '../Services/ShowMore';


export const Container = styled.div`
  min-height: calc(100vh - 100px);
  padding: 80px 5% 20px;
  color: white;
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;


  @media only screen and (min-width : 992px) {
    flex-direction: row;
  }

  .contact-form {
    height: calc(100vh - 80px);
    justify-content: center;
    @media only screen and (min-width : 992px) {
      /* height: auto; */
      justify-content: inherit;
    }
  }

  .cuerpo{ 
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%;

    @media only screen and (min-width : 992px) {
      width: auto;
 
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
      font-size: 6vw; 
      line-height: 6.3vw;
      }

      /* Large Devices, Wide Screens */
      @media only screen and (min-width : 1200px) {
        font-size: 4vw; 
        line-height: 4.3vw;
      }
  }

  .descripcion {
    margin: 0;
    text-align: center;
    font-weight: 300;
    width: 100%;

    font-size: 100%; 
    line-height: 130%;


   /* Medium Devices, Desktops */
   @media only screen and (min-width : 992px) {
      font-size: 120%; 
      margin: auto;
      width: 80vw;
      line-height: 150%;
    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 18px; 
      width: 60vw;
      line-height: 24px;
    }
  }

`;


export const WrapperVideo = styled.div`
`;



export const Location = styled.div`
  width: 100%;
  margin-top: 8vw;
  display: none;


  @media only screen and (min-width : 992px) {
    width: 50%;
    display: block;
    margin-top: 0vw;
    margin-left: 8vw;
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
  /* background: red; */
` 
