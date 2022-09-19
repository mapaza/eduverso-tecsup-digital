import React, { useRef } from 'react';

import { Title, Subtitle } from '../../../FirstSection/styles'
import BackgroundVideo from '../../../BackgroundVideo_2';

import { Container, Content, Body } from './styles';
import ShowMore from '../../ShowMore'

import useSmoothScrolling from '../../../../hooks/useSmoothScrolling';

import imagenFooter from '../../../../assets/images/laboratorios_web.jpeg';
import Video1 from '../../../../assets/videos/Labs_min.mp4';

function DataScience() {
  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);
  return (
    <Container ref={wrapperRef}>
      {/* <ImgContainer> */}
      {/* <div className="overlay"></div> */}
      {/* <img alt="data science"

        // src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602194847/Tecsup/pgc4.png"
        src={imagenCabecera}
        /> */}
      <BackgroundVideo src={Video1} />
      {/* </ImgContainer> */}
      <Body>
        <Content style={{}}>
          <div className="main-service">
            Digitalización de procesos
          </div>
          <Title className="title">
            <span>
              Laboratorios Web
            </span>
          </Title>
          <Subtitle>
            Proporciona enseñanza de una forma interactiva, que permita el uso de computadoras, tabletas o celulares para un aprendizaje en un entorno 3D inmersivo.
          </Subtitle>
          <div className="separator"></div>
          <div className="line-40"></div>
          <div className="features-wrapper">
            <div className="features">
              <div className="feature">
                <div className="title">Recursos Digitales complementarios</div>
                <div className="description">Se tiene el manejo de diferentes recursos (Documentos, Imágenes, audios), que complementan el aprendizaje.</div>
              </div>
              <div className="feature">
                <div className="title">Adaptabilidad frente a tus necesidades</div>
                <div className="description">La plataforma se adapta a las necesidades del entorno virtual que necesites, dándote la posibilidad de emplear cualquier circunstancia especial que favorezca al aprendizaje.</div>
              </div>
              <div className="feature">
                <div className="title">Interacción con objetos 3D</div>
                <div className="description">Magnifica oportunidad de recrear tus recursos en objetos 3D para visualizarlos, interactuar con ellos, y emplearlos en Realidad Virtual y Realidad Aumentada, entre muchas otras cosas más.</div>
              </div>
            </div>
            <div className="circle-wrapper">
              <div className="circle">
                <div className="circle-inner">
                </div>
              </div>
            </div>
          </div>

          <div className="separator"></div>
          <div className="separator"></div>
          <div className="line-60 right">
          </div>
          <div className="about-wrapper">
            <div className="about-image">
              <img
                alt=""
                src={imagenFooter}

              />
            </div>
            <div className="about">
              <div className="title">
                Acerca de la herramienta
                </div>
              <p>
                Los laboratorios (simuladores) basados en tecnologías web es el aprovechamiento de los servicios de internet para la simulación de entornos virtuales, a través de un navegador web.
                Actualmente su uso puede ser para e-learning, aprendizaje a distancia, aplicaciones de ingeniería entre otros, y la disponibilidad de nuestros laboratorios trabaja con la posibilidad de optimización a dispositivos móviles, realidad aumentada y realidad virtual, según sea requerido, con el que se puede aprovechar crear entornos 3D sobre web.
              </p>
              <ShowMore to={{ pathname: "/contacto", search: "?q=demo&&plataforma=4" }}>
                Solicitar una demo
              </ShowMore>
            </div>
          </div>
        </Content>
      </Body>

    </Container>
  );
}

export default DataScience;
