import styled from 'styled-components';
import { motion } from 'framer-motion'


export const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: #0E0E0F;
  flex-direction: column;
  color: white;
  opacity: 1;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  .footer{
    position: absolute;
    bottom: 50px;
    width: 100%;
    /* height: 100vh; */
  }
  img{
    width: 250px;
    /* margin-bottom: 10px; */
  }

  p.loading-percent {
    font-size: 42px;
    font-weight: 700;
    line-height: 52px;
    text-align: center;
  }
  p.loading-description {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 2px;
    line-height: 28px;
    text-align: center;
  }
`
