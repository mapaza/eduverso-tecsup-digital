import styled from 'styled-components';
import ShowMore from '../Services/ShowMore';


export const Container = styled.div`
  min-height: 100vh;
  padding: 80px 5% 20px;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content:center;

  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.3;
    }
  }

  .body{ 
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%;

    @media only screen and (min-width : 992px) {
      width: auto;
    }
  }

  .title {
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

  .description {
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

  .content{
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
  }

`;

export const SurveyButton = styled(ShowMore)`
  align-self: center;
  margin-top: 2vw;
  /* background: red; */
` 
