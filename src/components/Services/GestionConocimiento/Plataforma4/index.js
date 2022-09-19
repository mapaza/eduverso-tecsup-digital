import React, { useRef } from 'react';

import { Title, Subtitle } from '../../../FirstSection/styles'
import ShowMore from '../../ShowMore'

import { Container, Content, Body } from './styles';

import useSmoothScrolling from '../../../../hooks/useSmoothScrolling';
import BackgroundVideo from '../../../BackgroundVideo_2';
import Video1 from '../../../../assets/videos/PlataformaFinal_min.mp4';

function Plataforma4() {
  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);
  return (
    <Container ref={wrapperRef}>
      {/* <ImgContainer>
        <div className="overlay"></div>
        <img alt="plataforma 4.0"

          src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602255471/Tecsup/2eZotgLayHqc2NMS-Ux6L4ljOsIRryP0u-min.png"
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
              Plataforma de
            </span>
            <span>
              gestión del conocimiento
            </span>
            <span>
              industrial 4.0
            </span>
          </Title>
          <Subtitle>
            Moderna Plataforma orientada en la industria 4.0, un producto qué tu organización necesita.
          </Subtitle>
          <div className="separator"></div>
          <div className="line-40"></div>
          <div className="features-wrapper">
            <div className="features">
              <div className="feature">
                <div className="title">Recursos Digitales Optimizados</div>
                <div className="description">Se tiene el manejo de diferentes recursos (Documentos, planos, Imágenes, Vídeos, Elementos 3D), orientados para la interacción y el aprendizaje</div>
              </div>
              <div className="feature">
                <div className="title">Módulos Adaptables</div>
                <div className="description">La plataforma se adapta a las necesidades de tu organización, teniendo la posibilidad de configurar los diferentes módulos a tu gusto.</div>
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
              <img alt="" src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602194847/Tecsup/pgc4.png" />
            </div>
            <div className="about">
              <div className="title">
                Acerca de la herramienta
              </div>
              <p>
                La plataforma de gestión del conocimiento consta de varios módulos. El módulo de administración de archivos permite manejar con mayor eficacia y eficiencia en la búsqueda y recuperación de documentos, el módulo de evaluación que permite ver que tanto se ha aprendido a través de los recursos digitales y cual a sido el impacto en la adquisición de nuevos conocimientos, el módulo de interactivos donde se pueden encontrar los diagramas de flujo, paseos virtuales, a todo eso se suma la posibilidad de interactuar por medio de realidad virtual y mixta con equipos viendo en perspectiva y a más detalle la estructura e información detallada de cada uno así como los datos más relevantes de sus partes y funcionalidad enriqueciendo el conocimiento obtenido en los módulos anteriores.
              </p>
              <ShowMore to={{ pathname: "/contacto", search: "?q=demo&&plataforma=2" }}>
                Solicitar una demo
              </ShowMore>
            </div>
          </div>
        </Content>
      </Body>

    </Container>
  );
}

export default Plataforma4;
