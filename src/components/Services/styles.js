// import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  /* background: white; */
  min-height: 100vh;
`;


export const Detail = styled.div`
  width: 100%;
  position: relative;

  .left {
    color: white;
    min-height: 100vh;
    justify-content: center;
    display:flex;
    flex-direction: column;
    padding-bottom: 80px;
    @media only screen and (min-width : 992px) {
      padding-bottom: 0px;
    }
  }
  .img{
    height: 90vh;
    width: 44%;
    position: absolute;
    right: 0;
    top: 0;
    display: none;
    object-fit: cover;
    object-position: 24%;

    @media only screen and (min-width : 992px) {
      display: block;
    }

    
  }


  
`;



export const SubService = styled.div`
  padding:  0vw 6vw 5vw;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width : 992px) {
    width: 56%;
  }

  .number {
    font-size: 88px;
    font-weight: 700;
    line-height: 98px;
    -webkit-text-stroke: 1px #fff; 
    -webkit-text-fill-color: transparent;
  }

  .title {
    user-select: none;
    color: white;
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
    margin-bottom: 10px;

    @media only screen and (min-width : 992px) {
      font-size: 36px;
      line-height: 42px;
    }
  }

  p{
    color: white;
    user-select: none;
    font-size: 100%;
    line-height: 130%;
    font-weight: 300;

    @media only screen and (min-width : 992px) {
      font-size: 18px;
      line-height: 28px;
    }
  }
 
 
`;
