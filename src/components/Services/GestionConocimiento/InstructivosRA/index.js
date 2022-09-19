import React, { useRef } from 'react';

import { Title, Subtitle } from '../../../FirstSection/styles'
import { Container, Content, Body } from './styles';
import ShowMore from '../../ShowMore'

import useSmoothScrolling from '../../../../hooks/useSmoothScrolling';

import BackgroundVideo from '../../../BackgroundVideo_2';
import imagenFooter from '../../../../assets/images/instructivos_ar.jpg'
import Video1 from '../../../../assets/videos/Ar-MIN.mp4';

function InstructivosRA() {
  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);
  return (
    <Container ref={wrapperRef}>
      {/* <ImgContainer>
        <div className="overlay"></div>
        <img alt="realidad aumentada"

        // src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602194847/Tecsup/pgc4.png" 
        src={imagenCabecera}
        />
      </ImgContainer> */}
      <BackgroundVideo src={Video1} />
      <Body>
        <Content style={{}}>
          <div className="main-service">
            Gestión del conocimiento
          </div>
          <Title className="title">
            <span>
              Instructivos de
            </span>
            <span>
              mantenimiento con
            </span>
            <span>
              realidad aumentada
            </span>
          </Title>
          <Subtitle>
            Optimiza el aprendizaje, usando la realidad aumentada para interactuar con tareas específicas dentro de tu empresa
          </Subtitle>
          <div className="separator"></div>
          <div className="line-40"></div>
          <div className="features-wrapper">
            <div className="features">
              <div className="feature">
                <div className="title">Interacción</div>
                <div className="description">Con las herramientas que nos brindan las tecnologías actuales, brindamos una inmersión en la experiencia de aprendizaje.</div>
              </div>
              <div className="feature">
                <div className="title">Realismo</div>
                <div className="description">Nuestro equipo se encargará de diseñar en 3D con la mejor calidad posible, representado con fidelidad los detalles de todo lo que necesites para el aprendizaje.</div>
              </div>
              <div className="feature">
                <div className="title">Simulación</div>
                <div className="description">Las tareas son representadas con veracidad y realismo, conduciendo verdaderamente al aprendizaje de tareas específicas dentro del desarrollo de estos instructivos.</div>
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
                // src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602194847/Tecsup/pgc4.png"
                src={imagenFooter}
              />
            </div>
            <div className="about">
              <div className="title">
                Acerca de la herramienta
              </div>
              <p>
                Estos instructivos se realizan para diferentes dispositivos que brindan la experiencia de realidad aumentada, mediante celulares móviles y tablets con el uso de Arcore y Arkit, entornos de desarrollo que permiten el desarrollo de experiencias. También con el uso de dispositivos más especializados dentro de entornos empresariales tales como el Hololens u otros, que brindan características como oclusión, estimación real de la luz, y muchas cosas más que permiten una experiencia aún más completa.
              </p>
              <ShowMore to={{ pathname: "/contacto", search: "?q=demo&&plataforma=3" }}>
                Solicitar una demo
              </ShowMore>
            </div>
          </div>
        </Content>
      </Body>

    </Container>
  );
}

export default InstructivosRA;
