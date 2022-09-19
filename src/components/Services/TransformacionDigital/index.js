import React from 'react'
// import { Route, useLocation } from 'react-router-dom'
import { Container, } from './styles'
import { Detail, SubService } from '../styles'
import HeaderService from '../HeaderService'
import { useRef } from 'react'
import useSmoothScrolling from '../../../hooks/useSmoothScrolling'

const TransformacionDigital = () => {
  // const location = useLocation()
  // console.log(location);


  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);

  return (
    <Container ref={wrapperRef}>
      <HeaderService
        title="Transformación Digital"
        subtitle="En un mundo digitalizado, los cambios tecnológicos deben ir ligados a la estrategia y objetivos de la empresa. Con la transformación digital harás más que tener presencia en línea, entérate más con nuestros servicios."
      />
      <Detail>
        <div className="left">
          <SubService>
            <p className="number">01</p>
            <p className="title">Diagnostico Digital</p>
            <p>
              Descubrimos juntos el grado de madurez digital de tu empresa, para organizarnos y planificar la mejor transformación que brinde valor a tu empresa.
            </p>
          </SubService>
          <SubService>
            <p className="number">02</p>
            <p className="title">Competencias Digitales</p>
            <p>Analizamos aquellas competencias digitales con las que cuentes, y juntos nos enfocamos en reforzar la mejora y el desarrollo de nuevas competencias que harán aún mejor a tu empresa.</p>
          </SubService>
          <SubService>
            <p className="number">03</p>
            <p className="title">Cultura de la Información</p>
            <p>Juntos buscamos y seleccionamos las mejores tecnologías que le brindarán ese valor agregado que necesita tu negocio, basándonos en tus necesidades, y en toda la información que ya cuentas.</p>
          </SubService>
        </div>
        <img
          className="img"
          alt="transformación digital"
          src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116758/Tecsup/TransformacionDigital.jpg" />
      </Detail>
    </Container>
  )
}

export default TransformacionDigital;
