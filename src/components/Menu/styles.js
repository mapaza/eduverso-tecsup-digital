import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Container = styled(motion.div)`
 background: #070044;
 width: 100%;
 height: 100vh;
 top: 0;
 display: none;
 position: absolute;
 /* display: flex; */
 z-index: 98;
 right: 0;
`


export const MenuLayer = styled.div`
  padding-left: 10%;
  padding-right: 4%;
  height: 100vh;
  justify-content: center;
  display: flex;
  width: 50%;
  align-items: flex-start;
  flex-direction: column;
 .item{
   cursor: pointer;
   color: white;
   text-transform: uppercase;
   font-weight: 700;
   font-size: 52px;
   line-height: 62px;
   padding: 15px;
   display: flex;
   align-items: center;
  transition: all .3s;
   &:hover{

    -webkit-text-stroke: 1px #fff;
    -webkit-text-fill-color: transparent;

   }
 }
`

export const VisionLayer = styled.div`
  padding-right: 10%;
  padding-left: 4%;
  height: 100vh;
  justify-content: center;
  display: flex;
  color: white;
  width: 50%;
  opacity: 0.9;
  align-items: flex-start;
  flex-direction: column;
  .title{
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
  }
  p{
    font-weight: 300;
    text-align: justify;
    line-height: 24px;
  }
`


