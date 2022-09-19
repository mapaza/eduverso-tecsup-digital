import styled from 'styled-components'
import { Title, Subtitle } from '../../../FirstSection/styles'

export const Container = styled.div`
  padding-bottom: 30px;
`

export const Content = styled.div`
  padding-left: 5vw;
  z-index: 3;
  position: relative;
  padding-right: 5vw;
  .main-service {
    color: #cc3030;
    /* letter-spacing: 2px; */
    text-transform: uppercase;
    margin-bottom: 4vw;
    /* text-shadow: 0px 0px 4px rgba(255,255,255,0.5); */
    font-weight: 500;
    font-size: 100%;
    line-height: 140%;
    

    @media only screen and (min-width : 992px) {
      font-size: 1.5vw;
      line-height: 2.5vw;
    }


  }

  ${Title} {
    width: 100vw;
    font-size: 10vw; 
    line-height: 10.3vw;
    span {
      display: block;
      width: 100%;
    }

    @media only screen and (min-width : 992px) {
      width: 70vw;
      font-size: 8vw; 
      line-height: 8.3vw;
    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 6vw; 
      line-height: 6.3vw;
    }
  }

  ${Subtitle} {
    
    margin-top: 2.3vw;
    width: 90vw;
    font-weight: 200;
    font-size: 100%;
    line-height: 140%;
    

    @media only screen and (min-width : 992px) {
      font-size: 1.5vw;
      width: 60vw;
      line-height: 2.5vw;
    }
  }

  .line-40 {
    width: 40vw;
    background: white;
    height: 0.3vw;
  }

  .line-60 {
    width: 60vw;
    background: white;
    height: 0.3vw;
  }

  .right{
    margin-left: auto
  }

  .separator {
    padding: 2vw;
  }

  .features-wrapper{
    display: flex;
  }

  .features {
    margin-top: 4vw;
    width: 100vw;
    display: flex;
    flex-direction: column;
    color: white;

    @media only screen and (min-width : 992px) {
      width: 60vw;
      flex-direction: row;
    }
    .feature {
      flex: 1;
      .title {
        color: #cc3030;
        margin-bottom: 1vw;
        
        font-weight: 200;
        text-transform: uppercase;
        font-size: 100%;
        line-height: 140%;
        
        @media only screen and (min-width : 992px) {
          line-height: 1.6vw;
          font-size: 1.3vw;
        }

      }
      .description {
        
        font-weight: 400;
        font-size: 100%;
        line-height: 140%;
        
        @media only screen and (min-width : 992px) {
          line-height: 1.8vw;
          font-size: 1.5vw;
        }
      }
    }
    .feature + .feature {
      padding-top: 4vw;


      @media only screen and (min-width : 992px) {
        padding-left: 2.5vw;
        padding-top: 0vw;
      }
    }
  }

  .circle-wrapper {
    width: 40vw;
    justify-content: center;
    display: flex;
    z-index: 1;
    display: none;

    @media only screen and (min-width : 992px) {
      display: flex;
    }
    .circle{
      border: 0.01vw solid #cc3030;
      width: 22vw;
      height: 22vw;
      animation: rotation 2s infinite linear;
      position: relative;
      border-radius: 50%;
      .circle-inner {
        position: absolute;
        background: white;
        width: 1vw;
        left: -.5vw;
        top: calc(50% - 0.5vw);
        height: 1vw;
        border-radius: 50%;
      }
    }

    
  }

  .about-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width : 992px) {
      flex-direction: row;
    }

    .about-image{
      width: 100vw;
      height: 50vh;
      padding-top: 10px;

      @media only screen and (min-width : 992px) {
        width: 35vw;
        padding-top: 0px;
        height: 35vw;
        margin-left: -5vw;
        padding-right: 5vw;
      }

      img{
        background: gray;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% center;
      }
    }
  } 

  .about{
      width: 100%;
      padding-bottom: 80px;
      color: white;
      display: flex;
      flex-direction: column;
      margin-left: auto;

      @media only screen and (min-width : 992px) {
        width: 60vw;
        
      }
      .title {
        margin-top: 2vw;
        font-weight: 700;
        font-size: 8vw;
        line-height: 8.3vw;
        @media only screen and (min-width : 992px) {
          font-size: 5.1vw;
          line-height: 6.1vw;
        }
      }
      p{
        font-weight: 200;

        font-size: 100%;
        line-height: 140%;
        
        @media only screen and (min-width : 992px) {
          line-height: 1.8vw;
          font-size: 1.5vw;
        }
      }
      .get-demo{

      }
    }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

export const Body = styled.div`
  padding-top: 80vh;

  @media only screen and (min-width : 992px) {
    padding-top: 70vh;
    }
`


export const ImgContainer = styled.div`
  /* filter: grayscale(100%); */
  background: gray;
  width: 100%;
  position: absolute;
  height: 100vh;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:1;
    background: rgba(0,0,0,0.5)
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
