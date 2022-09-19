import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Canvas as Ca } from 'react-three-fiber'
import BoxModel from './BoxModel'
import VideoHeader from './VideoHeader'

export const Title = styled(motion.p)`
  color: white; 
  font-weight: 700; 
  font-size: 10vw; 
  line-height: 10.3vw;
  .outline{
    /* -webkit-text-stroke: 1px #fff; */
    /* -webkit-text-fill-color: transparent; */
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    font-size: 8vw; 
    line-height: 8.3vw;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    font-size: 6vw; 
    line-height: 6.3vw;
  }

`

export const Subtitle = styled(motion.p)`
  width: 90%; 
  font-weight: 300; 
  color: white; 
  margin-top: 1vw;
  font-size: 100%; 
  line-height: 130%;


   /* Medium Devices, Desktops */
   @media only screen and (min-width : 992px) {
    font-size: 120%; 
    line-height: 150%;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    font-size: 18px; 
    line-height: 24px;
  }

`


export const OverlayBody = styled.div`
  position: absolute;
  width: 100%;
  padding-left: 5vw;
  z-index: 10;
  user-select: none;

  @media only screen and (min-width : 992px) {
    width: 80%;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    width: 70%;
  }

  .button-circle-container{
    width: 140px;
  }
`

export const StickyContainer = styled.div`
  width: 100%; 
  height: 100vh; 
  /* position: sticky;  */
  /* top: 0;  */
  display: flex; 
  align-items: center;

  .triangle {
    width: 100%;
    height: 15vh;
    bottom: -34px;
    position: absolute;
    @media only screen and (min-width : 992px) {
      height: 20vh;
    }
  }
`


export const Container = styled.div`
  height: 100vh;
  /* scroll-snap-align: start; */
  position: relative;
`


export const Canvas = styled(Ca)`
  canvas {
    outline: none;
  }
`


export const Model = styled(BoxModel)`
  margin-left: auto;
  margin-right: -75vw;
  width: 150vw !important;
  height: 80vh !important;
  canvas {
    outline: none;
  }

   /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    margin-right: 0%;
    width: 60vw !important;
    height: 70vw !important;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    width: 55vw !important;
    height: 55vw !important;
  }
`
export const VideoH = styled(VideoHeader)`
  margin-left: auto;
  margin-right: -75vw;
  width: 150vw !important;
  height: 80vh !important;
  canvas {
    outline: none;
  }

   /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    margin-right: 0%;
    width: 60vw !important;
    height: 70vw !important;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    width: 55vw !important;
    height: 55vw !important;
  }
`

export const ScrollDown = styled(motion.div)`
  /* display: none; */
  color: white;
  display: flex;
  position: absolute;
  bottom: 6vh;
  font-size: 11px;
  user-select: none;
  font-weight: 300;
  flex-direction:column;
  align-items: center;
  left: calc(50% - 126px / 2);
  text-transform: uppercase;
  letter-spacing: 4px;
  svg { 
    margin-top: 3px;
    font-size: 18px;
    transform: rotate(90deg)
  }
  @media screen and (max-width: 768){
    color: rgba(0, 0, 0, 0);
  }

  @media only screen and (min-width : 992px) {
    font-size: 12px;
    bottom: 12vh;
  }
`
