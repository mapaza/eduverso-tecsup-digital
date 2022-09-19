import React, { useRef } from 'react'
import useSmoothScrolling from '../../../hooks/useSmoothScrolling';
import HeaderService from '../HeaderService';
import ShowMore from '../ShowMore';
// import { Route, useLocation } from 'react-router-dom'
import { Container, } from './styles'
import { Detail, SubService } from '../styles'


const AnalisisCienciaDatos = () => {
  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);

  return (
    <Container ref={wrapperRef}>
      <HeaderService
        title="Analítica y Ciencia de Datos"
        subtitle="Ayudamos a tu organización a maximizar el valor de sus datos, descubrir insights, construir
        planes y responder en tiempo real a la demanda de los clientes. 
        Obtenga el conocimiento necesario para generar un verdadero impacto en ellos."
      />
      <Detail>
        <div className="left">
          <SubService>
            <p className="number">01</p>
            <p className="title">Business Intelligence</p>
            <p>
            Nos encargamos de analizar, estructurar y normalizar todos los modelos de datos disponibles dentro de tu organización, brindándote plataformas que te ayudarán a mejorar el proceso de toma de decisiones.

            </p>
          </SubService>
          <SubService>
            <p className="number">02</p>
            <p className="title">Big data</p>
            <p>
            Contamos con la capacidad de trabajar con amplios volúmenes de información, sin importar la variedad de esta.

            </p>
          </SubService>
          <SubService>
            <p className="number">03</p>
            <p className="title">Data Science</p>
            <p>
            Utilizamos tecnologías avanzadas como deep learning y machine learning para brindarte insights relevantes y conclusiones concretas. Otorgándote también analíticas sobre la información de tu organización y métricas clave.

            </p>
            <ShowMore to="/servicios/data-science">
              Ver más
            </ShowMore>
          </SubService>
        </div>
        <img
          className="img"
          alt="análisis y ciencia de datos"
          src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116743/Tecsup/AnaliticaCienciaDatos.jpg" />
      </Detail>
    </Container>
  )
}

export default AnalisisCienciaDatos;
