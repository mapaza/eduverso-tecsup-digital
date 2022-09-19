import React, { useRef } from 'react';

import { Title, Subtitle } from '../../FirstSection/styles'

import { Container } from './styles';

import useSmoothScrolling from '../../../hooks/useSmoothScrolling';

export function Case1() {

  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);

  return (
    <Container ref={wrapperRef}>
      <div className="first-img">
        <img alt="img 01" src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116806/Tecsup/Caso1-001.png" />
      </div>
      <div className="header">
        <Title>
          Uso de Realidad Mixta en el montaje y desmontaje de rodamientos
        </Title>
        <Subtitle>
          Todas las industrias tienen una gran necesidad en común: Incrementar la eficacia en el entrenamiento de su personal. Esta necesidad ha venido siendo investigada y probada de diferentes formas a lo largo del tiempo, llegando a la conclusión que uno de los mayores contribuidores a esta causa sería el uso de tecnologías que permitan mayor interactividad con el contenido, el uso de recursos audio-visuales, etc.
      </Subtitle>
      </div>


    </Container>
  );
}


export function Case2() {
  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);
  return (
    <Container ref={wrapperRef}>
      <div className="first-img">
        <img alt="img 01" src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116752/Tecsup/Caso2-001.png" />
      </div>
      <div className="header">
        <Title>
          Plataforma de Entrenamiento con elementos virtuales y holográficos
        </Title>
        <Subtitle>
          Desde hace muchos años Tecsup viene desarrollando manuales interactivos de operación y mantenimiento para todo tipo de proyectos de diferentes industrias para empresas nacionales e internacionales. Estos manuales contribuyen en la optimización de tiempos y eficacia de capacitación, entrenamiento de operadores y mantenedores
      </Subtitle>
      </div>


    </Container>
  );
}


export function Case3() {
  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);
  return (
    <Container ref={wrapperRef}>
      <div className="first-img">
        <img alt="img 01" src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116744/Tecsup/Caso3-001.jpg" />
      </div>
      <div className="header">
        <Title>
          Empresas mineras e industriales.
        </Title>
        <Subtitle>
          Somos socios estratégicos en “Elaboración de Manuales Virtuales de Operación y Mantenimiento” para operaciones mineras e industriales, que se encuentren en fase de proyecto, fase de construcción y montaje, fase de puesta en servicio o fase de operación.
      </Subtitle>
      </div>
    </Container>
  );
}




