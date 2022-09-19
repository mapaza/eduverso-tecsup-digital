import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  background: transparent;
  width: 130px;
  height: 130px;
  display: flex;
  margin-top: 2vw;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media only screen and (min-width : 992px) {
    width: 170px;
    height: 170px;
  }

`

export const Border = styled(motion.div)`
  background: transparent;
  border: 1px solid rgba(255,255,255,0.5);
  width: 130px;
  height: 130px;
  display: flex;
  border-color: rgba(255,255,255,0.5) transparent rgba(255,255,255,0.5) transparent;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  @media only screen and (min-width : 992px) {
    width: 170px;
    height: 170px;
  }

`

export const InnerContainer = styled.div`
  background: transparent;
  border: 1px solid rgba(255,255,255,1);
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media only screen and (min-width : 992px) {
    width: 140px;
    height: 140px;
  }
`

export const Text = styled.span`
  color: white;
  opacity: 1;
  width: 80%;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;

  @media only screen and (min-width : 992px) {
    font-size: 14px;
    line-height: 20px;
  }
`


