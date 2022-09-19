import React, { useRef } from 'react'

import useSmoothScrolling from '../../../hooks/useSmoothScrolling';
import HeaderService from '../HeaderService';
import ShowMore from '../ShowMore';
// import { Route, useLocation } from 'react-router-dom'
import { Container, } from './styles'
import { Detail, SubService } from '../styles'

import image from '../../../assets/images/gestion_conocimiento.png'


const AnalisisCienciaDatos = () => {
  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);

  return (
    <Container ref={wrapperRef}>
      <HeaderService
        title="Gestión del conocimiento"
        subtitle="Con nuestra ayuda realiza el diseño de estrategias, procesos, estructuras y sistemas que permita a tu organización hacer uso de lo que conoce, para obtener un mayor beneficio de los datos."
      />
      <Detail>
        <div className="left">
          <SubService>
            <p className="number">01</p>
            <p className="title">Plataforma de gestión del conocimiento industrial 4.0</p>
            <p>
              Es la primera plataforma que une los recursos digitales planos (documentos, planos, imágenes) con elementos interactivos en tercera dimensión, la cual está diseñado para que se pueda transmitir de manera más efectiva el conocimiento y así mejorar las habilidades y llevarlas a la práctica de manera rápida.
            </p>

            <ShowMore to="/servicios/plataforma-de-gestión-del-conocimiento-industrial-4-0">
              Ver Más
            </ShowMore>
          </SubService>
          <SubService>
            <p className="number">02</p>
            <p className="title">Instructivos de mantenimiento con realidad aumentada</p>
            <p>
              Esta aplicación permite al usuario ver objetos generados por ordenador dentro de su campo visual, y la posibilidad de interactuar en diferentes situaciones que mezclan lo material y lo artificial.
            </p>
            <ShowMore to='/servicios/instructivos-de-mantenimiento-con-realidad-aumentada' >
              Ver Más
            </ShowMore>
          </SubService>
        </div>
        <img className="img" alt="análisis y ciencia de datos" src={image} />
      </Detail>
    </Container>
  )
}

export default AnalisisCienciaDatos;
