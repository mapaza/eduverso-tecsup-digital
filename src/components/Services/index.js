import React from "react";
// import { motion } from 'framer-motion';
import { useEffect } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import TransformacionDigital from "./TransformacionDigital";
import AnalisisCienciaDatos from "./AnalisisCienciaDatos";
import DataScience from "./AnalisisCienciaDatos/DataScience";
import GestionConocimiento from "./GestionConocimiento";
import Plataforma4 from "./GestionConocimiento/Plataforma4";
import InstructivosRA from "./GestionConocimiento/InstructivosRA";
import LaboratoriosWeb from "./DigitalizacionProcesos/LaboratoriosWeb";
import DigitalizacionProcesos from "./DigitalizacionProcesos";
import { Container } from "./styles";
import BackgroundVideo from "../BackgroundVideo";
import { useState } from "react";

const Services = () => {
  // const location = useLocation()
  const [video, setVideo] = useState({
    path: "",
    thumb: "",
  });
  const history = useHistory();
  const location = useLocation();

  const navbar = document.querySelector("#navbar");
  const circle = document.querySelector("#navbar .circle");
  const contact = document.querySelector("#navbar .contact");
  const img = document.querySelector("#navbar img");
  navbar.style.color = "white";
  circle.style.background = "white";
  contact.style.color = "white";
  circle.style.color = "black";
  img.style.filter = "invert(0%)";

  useEffect(() => {
    switch (location.pathname) {
      case "/servicios":
        return history.push("/servicios/transformacion-digital");

      case "/servicios/transformacion-digital":
        return setVideo({
          path:
            "https://res.cloudinary.com/dfxv7hzza/video/upload/v1602116955/Tecsup/0001.mp4",
          thumb:
            "https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116820/Tecsup/thumb-001.jpg",
        });

      case "/servicios/gestion-del-conocimiento":
        return setVideo({
          path:
            "https://res.cloudinary.com/dfxv7hzza/video/upload/v1602456476/Tecsup/olas_hd.mp4",
          thumb:
            "https://res.cloudinary.com/dfxv7hzza/image/upload/v1602456698/Tecsup/thumb-video_002.png",
        });

      case "/servicios/digitalizacion-de-procesos":
        return setVideo({
          path:
            "https://res.cloudinary.com/dfxv7hzza/video/upload/v1602116866/Tecsup/0002.mp4",
          thumb:
            "https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116823/Tecsup/thumb-002.jpg",
        });

      case "/servicios/analitica-y-ciencia-de-datos":
        return setVideo({
          path:
            "https://res.cloudinary.com/dfxv7hzza/video/upload/v1602116865/Tecsup/0003.mp4",
          thumb:
            "https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116820/Tecsup/thumb-003.jpg",
        });

      default:
        return setVideo({ path: "" });
    }
  }, [location, history]);

  return (
    <Container>
      {video.path && (
        <BackgroundVideo
          key={video.path}
          src={video.path}
          thumb={video.thumb}
        />
      )}
      <Route
        path="/servicios/transformacion-digital"
        component={TransformacionDigital}
      />
      <Route
        path="/servicios/gestion-del-conocimiento"
        component={GestionConocimiento}
      />
      {/* ------ Inicio Gestion Conocimiento ------ */}
      <Route
        path="/servicios/plataforma-de-gestión-del-conocimiento-industrial-4-0"
        component={Plataforma4}
      />
      <Route
        path="/servicios/instructivos-de-mantenimiento-con-realidad-aumentada"
        component={InstructivosRA}
      />
      {/* ------ Fin Gestion Conocimiento ------ */}
      <Route
        path="/servicios/digitalizacion-de-procesos"
        component={DigitalizacionProcesos}
      />

      {/* ------ digitalizacion-de-procesos ------ */}
      <Route path="/servicios/laboratorios-web" component={LaboratoriosWeb} />
      {/* ------ Fin digitalizacion-de-procesos ------ */}

      <Route
        path="/servicios/analitica-y-ciencia-de-datos"
        component={AnalisisCienciaDatos}
      />
      {/* ------ Inicio Analitica y ciencia de datos ------ */}
      <Route path="/servicios/data-science" component={DataScience} />
      {/* ------ Fin Gestion Analitica y ciencia de datos ------ */}
    </Container>
  );
};

export default Services;
