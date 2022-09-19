import React from 'react'
// import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container, OverlayBody, StickyContainer, Subtitle, Title, ImageContainer, ModelWrapper } from './styles'
// import ServicesImg from '../../assets/images/Services.jpg'

// import SectionsContext from '../SectionsWrapper/SectionsContext'
// import useWrapperScroll from '../SectionsWrapper/useWrapperScroll'
import ButtonCircle from '../ButtonCircle'
import { forwardRef } from 'react'
import BoxModel from '../FirstSection/BoxModel'
import { useRef } from 'react'
import modelBomba from '../../assets/turbine/bomba.glb'
import { IconsLayer } from './styles';

//Servicios
import TransformacionDigitalSVG from '../Services/HeaderService/TransformacionDigitalSVG';
import CienciaDatosSVG from '../Services/HeaderService/CienciaDatosSVG';
import DigitalizacionProcesosSVG from '../Services/HeaderService/DigitalizacionProcesosSVG';
import GestionConocimientoSVG from '../Services/HeaderService/GestionConocimientoSVG';

function SecondSection(props, ref) {
  const meshRef = useRef(null);

  return (
    <Container id="second" ref={ref}>
      <StickyContainer>
        <OverlayBody>
          <Title
            exit={{ opacity: 0 }}
          // style={{ opacity: opacityTitle }}
          >
            Nuestros Servicios
          </Title>
          <Subtitle exit={{ opacity: 0 }}>
            Explore todas las soluciones y servicios de software para Transformación digital, Gestión del Conocimiento, Digitalización de Procesos, Analítica y Ciencia de Datos y más para potenciar su fuerza de trabajo y superar el ritmo de la innovación.
          </Subtitle>
          
          {/*<div className="button-circle-container">
          
             <Link to="/servicios/transformacion-digital">
              <ButtonCircle black canAnimate delay={0}>
                VER LOS SERVICIOS
              </ButtonCircle>
            </Link> 
          </div> */}
          <IconsLayer style={{marginTop:'1vh'}}>
          <Link to="/servicios/transformacion-digital">
          <div className="servicio-titulo">Capacitación y Entrenamiento Inmersivo</div>
            <div className="circle" style={{border: '3px solid black', width: '90px', height:'90px', marginRight:'2.5vh'}} >
              <TransformacionDigitalSVG />
            </div>
          </Link>
          <Link to="/servicios/gestion-del-conocimiento">
          <div className="servicio-titulo">Instructivos para Operaciones y Mantenimiento</div>
            <div className="circle" style={{border: '3px solid black', width: '90px', height:'90px', marginRight:'2.5vh'}} >
              <GestionConocimientoSVG />
            </div>
          </Link>
          <Link to="/servicios/digitalizacion-de-procesos">
            <div className="servicio-titulo">Monitoreo de condiciones y visualización de datos operativos</div>
           <div className="circle" style={{border: '3px solid black', width: '90px', height:'90px', marginRight:'2.5vh'}} >
              <DigitalizacionProcesosSVG />
            </div>
          </Link>
         
          <Link to="/servicios/analitica-y-ciencia-de-datos">
          <div className="servicio-titulo">Educación extendida</div>
           <div className="circle" style={{border: '3px solid black', width: '90px', height:'90px', marginRight:'2.5vh'}} >
              <CienciaDatosSVG />
            </div>
          </Link>
        </IconsLayer>
          
        </OverlayBody>

        <ImageContainer>
          <ModelWrapper>
            <BoxModel
              ref={meshRef}
              pathModel={modelBomba}
              // meshProps={initialMeshValues}
              camera={{ fov: 25, position: [10, -20, 0] }}
              style={{ width: "100%", height: '100%' }}
              enabledZoomIn={false}
              enabledOrbitControls={true}
            />
          </ModelWrapper>
          <img
            alt=""
            src="https://res.cloudinary.com/tecsup-tasa/image/upload/v1618352338/landingpage/Dise%C3%B1o_sin_t%C3%ADtulo_3_-min_1_o4fdb3.png"
          />
        </ImageContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
          style={{
            width: '100%',
            height: '20vh',
            bottom: '-34px',
            zIndex: '100',
            position: 'absolute',
          }}>
          <polygon fill="#0E0E0F" points="0,100 100,0 100,100" />
        </svg>
      </StickyContainer>
    </Container>
  )
}


export default forwardRef(SecondSection);
