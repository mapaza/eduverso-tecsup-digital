import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  background: transparent;
  border: 1px solid rgba(0,0,0,0.5);
  width: 170px;
  height: 170px;
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`

export const InnerContainer = styled.div`
  background: transparent;
  border: 1px solid rgba(0,0,0,1);
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

export const Text = styled.span`
  opacity: 1;
  width: 80%;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 2px;
  font-size: 14px;
  text-align: center;
`


