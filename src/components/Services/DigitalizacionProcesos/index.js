import React, { useRef } from 'react'
import useSmoothScrolling from '../../../hooks/useSmoothScrolling';
import HeaderService from '../HeaderService';
// import { Route, useLocation } from 'react-router-dom'
import { Container, } from './styles'
import ShowMore from '../ShowMore';
import { Detail, SubService } from '../styles'


const BigData = () => {
  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);

  return (
    <Container ref={wrapperRef}>
      <HeaderService
        title="Digitalización de procesos"
        subtitle="Explora nuestras soluciones basadas en realidad mixta para exponer digitalizar la información de tu empresa."
      />
      <Detail>
        <div className="left">
          <SubService>
            <p className="number">01</p>
            <p className="title">Módulos de capacitación con Realidad Virtual y Mixta</p>
            <p>
              Esta aplicación permite al usuario ver objetos generados por ordenador dentro de su campo visual, y la posibilidad de interactuar en diferentes situaciones que mezclan lo material y lo artificial.
            </p>
          </SubService>
          <SubService>
            <p className="number">02</p>
            <p className="title">Operación con Realidad Mixta y Aumentada</p>
            <p>
              Al ayudarte a implementar el uso del big data en tu organización, tendrás la ventaja de una toma de decisiones de una forma objetiva, que permita anteponerte a lo que pasará.
            </p>
          </SubService>
          <SubService>
            <p className="number">03</p>
            <p className="title">Laboratorios Web</p>
            <p>
              Creemos en el poder transformador del aprendizaje experiencial utilizando soluciones de educación de realidad aumentada o virtual. Estas soluciones involucran activamente a los estudiantes, lo que resulta en un aprendizaje más rápido, una mejor retención y una mejor toma de decisiones.
            </p>
            <ShowMore to='/servicios/laboratorios-web' >
              Ver Más
            </ShowMore>

          </SubService>
          <SubService>
            <p className="number">04</p>
            <p className="title">BIM en tiempo real con Realidad Virtual</p>
            <p>
              Acompañamos a la transferencia de Información de modelos BIM, en entornos de inspección 3D que brindarán aún más valor a tu información y te permitirá tomar mejores decisiones.
            </p>
          </SubService>

        </div>
        <img className="img" alt="big data" src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116758/Tecsup/BigData.jpg" />
      </Detail>
    </Container>
  )
}

export default BigData;
