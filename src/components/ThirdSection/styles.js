import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Line = styled.div`
  height: 1px;
  background: #ccc;
  margin: 3vh 0 5vh;
  opacity: 0.1;
  width: 100%;
`

export const Text = styled(motion.p)`
  text-align: center;
  cursor: pointer;
  font-weight: 500; 
  font-size: 16px; 
  text-transform: uppercase;
  color: white;
  line-height: 24px;

  @media only screen and (min-width : 920px) {
    font-size: 24px; 
    line-height: 32px;
    }
`
export const Title = styled(motion.p)`
  text-align: center;
  font-weight: 500; 
  font-size: 27px; 
  text-transform: uppercase;
  color: white;
  line-height: 24px;

  @media only screen and (min-width : 920px) {
    font-size: 35px; 
    line-height: 32px;
    }
`

export const TextContainer = styled.div`
`



export const OverlayBody = styled.div`
  position: absolute;
  padding: 5%;
  z-index: 10;
  user-select: none;
`

export const StickyContainer = styled.div`
  width: 100%; 
  height: 100vh; 
  /* position: sticky;  */
  /* top: 0;  */
  display: flex; 
  overflow:hidden;
  align-items: center;
  justify-content: center;
`


export const Container = styled.div`
  height: 100vh;
  position: relative;
`



