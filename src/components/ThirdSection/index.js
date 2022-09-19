import React from 'react'
// import { motion, useElementScroll, useTransform } from 'framer-motion'
import { Container, OverlayBody, StickyContainer, Text, Title, Line, TextContainer } from './styles'
import { Link } from 'react-router-dom'
// import SectionsContext from '../SectionsWrapper/SectionsContext'
// import useWrapperScroll from '../SectionsWrapper/useWrapperScroll'

// import { Canvas } from 'react-three-fiber'
// import BoxModel from '../FirstSection/BoxModel'


export default function ThirdSection() {


  // const { wrapperRef } = useContext(SectionsContext)
  // useWrapperScroll
  // const { scrollYProgress } = useWrapperScroll();

  // // console.log(scrollYProgress);

  // // const { scrollYProgress } = useElementScroll(wrapperRef)

  // const scale = useTransform(scrollYProgress,
  //   [0.25, 0.33, 0.33, 0.5], [1, 1.2, 1.2, 1])
  // const opacityTitle = useTransform(scrollYProgress,
  //   [0.25, 0.33], [0, 1])
  // const opacitySubtitle = useTransform(scrollYProgress,
  //   [0.33, 0.5], [0, 1])
  // console.log(scale);
  return (
    <Container id="third">
      <StickyContainer>
        <OverlayBody>
          <TextContainer>
            <Title><b>Casos de Uso</b></Title>
            <Line />
            <br/>
          </TextContainer>
          <TextContainer>
            <Link to="/casos/uso-de-realidad-mixta-en-el-montaje-y-desmontaje-de-rodamientos">
              <Text whileHover={{
                x: 20,
              }}>Uso de Realidad Mixta en el montaje y desmontaje de rodamientos</Text>
              <Line />
            </Link>
          </TextContainer>
          <TextContainer>
            <Link to='/casos/empresas-mineras-e-industriales'>
              <Text whileHover={{
                x: 20,
              }}>Empresas mineras e industriales. </Text>
            </Link>
            <Line />
          </TextContainer>
          <TextContainer>
            <Link to='/casos/plataforma-de-entrenamiento-con-elementos-virtuales-y-holográficos'>
              <Text whileHover={{
                x: 20,
              }}>Plataforma de Entrenamiento con elementos virtuales y holográficos </Text>
            </Link>
            <Line />
          </TextContainer>
        </OverlayBody>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
          style={{
            width: '100%',
            height: '20vh',
            bottom: '-34px',
            position: 'absolute',
          }}>
          <polygon fill="white" points="0,100 100,0 100,100" />
        </svg>
      </StickyContainer>

    </Container>
  )
}
