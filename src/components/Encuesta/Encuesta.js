import React, { useState, useEffect } from 'react';
import stripHtml from 'string-strip-html';
// import {
// 	generateEvaluation,
// 	saveUserEvaluation,
// } from 'services/EvaluacionesService';
import PropTypes from 'prop-types';
// import { Loader } from 'components/Loader';
import { ContainerFlex, ContainerLoader, TextInformative } from './Styles';
import { EvaluationsSystem } from './EvaluationsSystem';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Input from '../components/elements/Input';
import axios from 'axios';
import SectionHeader from '../components/sections/partials/SectionHeader';

import Swal from 'sweetalert2';
import bannerFoto from '../assets/images/contactanos.jpg';
import SimpleModal from '../components/elements/ModalPoliticasPrivacidad';
import Particles from 'react-particles-js';
import HeaderVolver from '../components/layout/HeaderVolver';

const sectionHeader = {
  title: 'Comience Ahora',
  paragraph:
    'Responde el siguiente cuestionario para saber en qué grado de madurez te encuentras y ver cómo te podemos ayudar',
};

var sectionStyle = {
  backgroundImage: `url(${bannerFoto})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};
function Encuesta() {
  // const { id } = match.params;

  const [modalFinishEvaluation, setModalFinishEvaluation] = useState({
    isOpen: false,
  });

  const [empezarCuestionario, setEmpezarCuestionario] = React.useState(false);

  // const [estadoPuntaje, setEstadoPuntaje] = useState(0);
  const [
    estadoAlternativasRespondida,
    setEstadoAlternativasRespondida,
  ] = useState({});

  const [questionsState, setQuestionsState] = useState({
    questions: [],
    idUserEvaluation: -1,
    isLoading: true,
    hasError: false,
    message: null,
  });

  const [usuario, setUsuario] = useState({
    NombreUsuario: '',
    ApellidoUsuario: '',
    EmailUsuario: '',
    TelefonoUsuario: '',
    CompaniaUsuario: '',
    IdCiudad: '',
    IdDemo: '1',
    respuestas: [],
  });

  const urlVideo =
    'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4';

  const [ciudades, setCiudades] = useState([]);
  const [cuestionario, setCuestionario] = useState(0);

  const [error, setError] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [checkBoxPoliticas, setCheckBoxPoliticas] = useState(false);

  const [preguntaActiva, setPreguntaActiva] = useState(null);

  var particles = null;

  const loadQuestionsEvaluations = async () => {
    // const response = await getGeneratedEvaluation(id);
    // const data = response.data || {};
    particles = <Particles />;
    const preguntas = [
      {
        idPregunta: 1,
        idAreaConocimiento: 1,
        contenido:
          '<p>Priorizamos las iniciativas digitales en función de su capacidad para afectar nuestros objetivos comerciales.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 1,
            idPregunta: 1,
            valorAlternativa: 8,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 2,
            idPregunta: 1,
            valorAlternativa: 6,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 3,
            idPregunta: 1,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 4,
            idPregunta: 1,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 5,
            idPregunta: 1,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 2,
        idAreaConocimiento: 1,
        contenido:
          '<p>La investigación y el pensamiento centrado en el cliente se integran en todo el diseño y desarrollo de productos y servicios digitales</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 6,
            idPregunta: 2,
            valorAlternativa: 8,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 7,
            idPregunta: 2,
            valorAlternativa: 6,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 8,
            idPregunta: 2,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 9,
            idPregunta: 2,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 10,
            idPregunta: 2,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 3,
        idAreaConocimiento: 1,
        contenido:
          '<p>Brindamos a nuestros clientes una experiencia consistente en diferentes dispositivos y puntos de contacto</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 11,
            idPregunta: 3,
            valorAlternativa: 8,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 12,
            idPregunta: 3,
            valorAlternativa: 6,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 13,
            idPregunta: 3,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 14,
            idPregunta: 3,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 15,
            idPregunta: 3,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 4,
        idAreaConocimiento: 2,
        contenido:
          '<p>Medimos constantemente el impacto de las iniciativas digitales frente a los objetivos comerciales y los indicadores clave de rendimiento.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 16,
            idPregunta: 4,
            valorAlternativa: 6,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 17,
            idPregunta: 4,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 18,
            idPregunta: 4,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 19,
            idPregunta: 4,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 20,
            idPregunta: 4,
            valorAlternativa: 0,
          },
        ],
      },

      {
        idPregunta: 5,
        idAreaConocimiento: 2,
        contenido:
          '<p>Continuamente buscamos nuevas oportunidades para satisfacer mejor las necesidades y  expectativas de nuestros clientes.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 21,
            idPregunta: 5,
            valorAlternativa: 6,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 22,
            idPregunta: 5,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 23,
            idPregunta: 5,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 24,
            idPregunta: 5,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 25,
            idPregunta: 5,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 6,
        idAreaConocimiento: 2,
        contenido:
          '<p>La información del cliente y las pruebas de usuario se utilizan para refinar continuamente los productos y servicios digitales una vez que se han lanzado.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 26,
            idPregunta: 6,
            valorAlternativa: 6,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 27,
            idPregunta: 6,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 28,
            idPregunta: 6,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 29,
            idPregunta: 6,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 30,
            idPregunta: 6,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 7,
        idAreaConocimiento: 2,
        contenido:
          '<p>Medimos la experiencia del cliente de forma continua y satisfacemos las necesidades y expectativas del cliente.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 31,
            idPregunta: 7,
            valorAlternativa: 6,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 32,
            idPregunta: 7,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 33,
            idPregunta: 7,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 34,
            idPregunta: 7,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 35,
            idPregunta: 7,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 8,
        idAreaConocimiento: 3,
        contenido:
          '<p>Tenemos una cultura de innovación y colaboración en torno a los experimentos digitales, compartir los aprendizajes de experimentos fallidos se valora tanto como las ideas exitosas.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 36,
            idPregunta: 8,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 37,
            idPregunta: 8,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 38,
            idPregunta: 8,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 39,
            idPregunta: 8,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 40,
            idPregunta: 8,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 9,
        idAreaConocimiento: 3,
        contenido:
          '<p>A menudo establecemos equipos interdepartamentales para trabajar en colaboración en la iteración y desarrollo de productos digitales.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 41,
            idPregunta: 9,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 42,
            idPregunta: 9,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 43,
            idPregunta: 9,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 44,
            idPregunta: 9,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 45,
            idPregunta: 9,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 10,
        idAreaConocimiento: 3,
        contenido:
          '<p>Nos centramos en pequeñas iteraciones y mejoras de productos, en lugar de proyectos digitales a gran escala.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 46,
            idPregunta: 10,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 47,
            idPregunta: 10,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 48,
            idPregunta: 10,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 49,
            idPregunta: 10,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 50,
            idPregunta: 10,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 11,
        idAreaConocimiento: 3,
        contenido:
          '<p>Regularmente revisamos y reevaluamos nuestra dirección estratégica y hoja de ruta digital para asegurarnos de que esté alineada con las cambiantes necesidades del cliente y la dinámica del mercado.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 51,
            idPregunta: 11,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 52,
            idPregunta: 11,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 53,
            idPregunta: 11,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 54,
            idPregunta: 11,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 55,
            idPregunta: 11,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 12,
        idAreaConocimiento: 3,
        contenido:
          '<p>Durante la crisis del coronavirus, hemos podido pasar rápidamente a la resolución ágil de problemas.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 56,
            idPregunta: 12,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 57,
            idPregunta: 12,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 58,
            idPregunta: 12,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 59,
            idPregunta: 12,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 60,
            idPregunta: 12,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 13,
        idAreaConocimiento: 3,
        contenido:
          '<p>En tiempos de interrupción e incertidumbre, nos mantenemos enfocados en nuestros objetivos estratégicos e iniciativas de transformación digital.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 56,
            idPregunta: 12,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 57,
            idPregunta: 12,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 58,
            idPregunta: 12,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 59,
            idPregunta: 12,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 60,
            idPregunta: 12,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 14,
        idAreaConocimiento: 4,
        contenido:
          '<p>Tenemos las habilidades internas y la capacidad digital para respaldar las actividades comerciales habituales, así como proyectos más grandes.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 61,
            idPregunta: 13,
            valorAlternativa: 4,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 62,
            idPregunta: 13,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 63,
            idPregunta: 13,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 64,
            idPregunta: 13,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 65,
            idPregunta: 13,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 15,
        idAreaConocimiento: 4,
        contenido:
          '<p> El valor de la inversión digital para lograr nuestros objetivos comerciales se entiende en toda la organización, incluido el C-suite.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 66,
            idPregunta: 14,
            valorAlternativa: 5,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 67,
            idPregunta: 14,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 68,
            idPregunta: 14,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 69,
            idPregunta: 14,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 70,
            idPregunta: 14,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 16,
        idAreaConocimiento: 4,
        contenido:
          '<p>Buscamos activamente formas de aportar mayor flexibilidad, escala y eficiencia a los sistemas de back-end que impulsan las experiencias de los clientes frontend</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 71,
            idPregunta: 15,
            valorAlternativa: 5,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 72,
            idPregunta: 15,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 73,
            idPregunta: 15,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 74,
            idPregunta: 15,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 75,
            idPregunta: 15,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 17,
        idAreaConocimiento: 4,
        contenido:
          '<p>Usamos y podemos agregar fácilmente servicios, integraciones y API de terceros para mejorar y respaldar la experiencia del cliente.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 76,
            idPregunta: 16,
            valorAlternativa: 5,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 77,
            idPregunta: 16,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 78,
            idPregunta: 16,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 79,
            idPregunta: 16,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 80,
            idPregunta: 16,
            valorAlternativa: 0,
          },
        ],
      },
      {
        idPregunta: 18,
        idAreaConocimiento: 4,
        contenido:
          '<p>Podemos implementar mejoras y cambios de productos digitales relativamente rápido y sin problemas.</p>',
        nivel: 1,
        tipo: 1,
        alternativas: [
          {
            contenido: '<p>Totalmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 81,
            idPregunta: 17,
            valorAlternativa: 5,
          },
          {
            contenido: '<p>De acuerdo</p>',
            correcta: false,
            idAlternativa: 82,
            idPregunta: 17,
            valorAlternativa: 3,
          },
          {
            contenido: '<p>Parcialmente de acuerdo</p>',
            correcta: false,
            idAlternativa: 83,
            idPregunta: 17,
            valorAlternativa: 2,
          },
          {
            contenido: '<p>Desacuerdo</p>',
            correcta: false,
            idAlternativa: 84,
            idPregunta: 17,
            valorAlternativa: 1,
          },
          {
            contenido: '<p>Muy en desacuerdo</p>',
            correcta: false,
            idAlternativa: 85,
            idPregunta: 17,
            valorAlternativa: 0,
          },
        ],
      },

    ];
    // setTimeout(() => {
    setQuestionsState((e) => ({
      ...e,
      questions: preguntas || [],
      // message: response.message,
      idUserEvaluation: 1 || -1,
      isLoading: false,
    }));
    // }, 1000);
  };

  useEffect(() => {
    loadQuestionsEvaluations();
    // Actualiza el título del documento usando la API del navegador

    const obtenerCiudades = async () => {
      const url = '/api/ciudades';
      const resultado = await axios.get(url);
      setCiudades(resultado.data);
    };

    obtenerCiudades();
  }, [loadQuestionsEvaluations]);

  // useEffect(() => {

  // }, []);

  const { questions } = questionsState;

  const hasRender =
    questions && questions.length > 0 && !questionsState.isLoading;

  const hasMessage = !hasRender && questionsState.message;

  // console.log("ejecutando handlefinish", estadoAlternativasRespondida);
  const handleFinishEvaluation = async () => {


    setModalFinishEvaluation((m) => ({
      ...m,
      isOpen: true,
    }));
  };

  // console.log(usuario);
  function handleCheckAlternative(value, idPregunta) {
    setEstadoAlternativasRespondida((estado) => ({
      ...estado,
      [idPregunta]: value,

    }));
    // console.log(idPregunta);
    setPreguntaActiva(idPregunta);
    // console.log(value);
    // console.log(idAlternativa);
    // console.log(estadoAlternativasRespondida);
    // const puntaje = Object.values(estadoAlternativasRespondida).reduce(
    // 	(valorAlternativa, acumulado) => {
    // 		return valorAlternativa + acumulado;
    // 	}
    // );

    // setEstadoPuntaje(estadoPuntaje + value);
    // console.log(estadoPuntaje);
  }

  function validarPuntaje(puntaje, idPregunta) {
    if (puntaje < 8 && idPregunta === 4) {
      handleFinishEvaluation();
    } else if (puntaje < 12 && idPregunta === 6) {
      handleFinishEvaluation();
    } else if (puntaje < 16 && idPregunta === 8) {
      handleFinishEvaluation();
    } else if (puntaje < 23 && idPregunta === 11) {
      handleFinishEvaluation();
    }
  }
  useEffect(() => {
    if (Object.values(estadoAlternativasRespondida).length > 0) {
      const puntaje = Object.values(estadoAlternativasRespondida).reduce(
        (valorAlternativa, acumulado) => {
          return valorAlternativa + acumulado;
        }
      );
      // validarPuntaje(puntaje, preguntaActiva);
    }

    // console.log(estadoAlternativasRespondida);
  }, [estadoAlternativasRespondida]);

  function renderEvaluationSystem() {
    return (
      hasRender && (
        <EvaluationsSystem
          onCheckAlternative={handleCheckAlternative}
          questions={questions}
          onFinishEvaluation={handleFinishEvaluation}
        />
      )
    );
  }

  function renderLoader() {
    return (
      questionsState.isLoading && (
        <ContainerLoader>{/* <Loader /> */}</ContainerLoader>
      )
    );
  }

  function renderMessage() {
    return (
      hasMessage && (
        <ContainerLoader>
          <TextInformative>{questionsState.message}</TextInformative>
        </ContainerLoader>
      )
    );
  }
  const handleChange = (e) => {
    // colocar lo que el usuario escrive en el state
    // this.setState({
    // contacto: {
    // ...this.state.contacto,
    // [e.target.name]: e.target.value,
    // },
    // });

    setUsuario({ ...usuario, [e.target.name]: e.target.value });

  };
  // const handleChange = (e) => {
  // 	setUsuario({ ...usuario, respuestas: answers });
  // }
  const handleSubmit = async (e) => {
    const answers = [];
    // console.log(estadoAlternativasRespondida);
    Object.keys(estadoAlternativasRespondida).forEach((key) => {
      //console.log(puntaje);
      //console.log(estadoAlternativasRespondida[key]);
      const answer = {
        ValorRespuesta: estadoAlternativasRespondida[key],
        IdPregunta: key,
        ContenidoPregunta: stripHtml(
          questionsState.questions.find((x) => x.idPregunta === parseInt(key))
            .contenido
        ),
        IdCuestionario: cuestionario,
        IdAreaConocimiento: questionsState.questions.find(
          (x) => x.idPregunta === parseInt(key)
        ).idAreaConocimiento,
      };

      answers.push(answer);
    });
    const usuarioData = { ...usuario, respuestas: answers };
    // setUsuario({ ...usuario, respuestas: answers });
    e.preventDefault();
    //extraer los valores del state
    const {
      NombreUsuario,
      ApellidoUsuario,
      EmailUsuario,
      IdCiudad,
      CompaniaUsuario,
    } = usuario;

    // console.log(usuarioData);
    // validar que todos los campos esten llenos
    if (
      NombreUsuario === '' ||
      ApellidoUsuario === '' ||
      EmailUsuario === '' ||
      IdCiudad === '' ||
      CompaniaUsuario === ''
    ) {
      setError(true);

      return;
    } else {
      const url = `/api/cuestionarios/${cuestionario}/crearRespuestas`;


      await axios.put(url, usuarioData);
      Swal.fire(
        'Gracias por llenar la encuesta',
        'Le enviaremos un correo para que vea sus resultados',
        'success'
      );
      setModalFinishEvaluation((m) => ({
        ...m,
        isOpen: false,
      }));
      setEmpezarCuestionario(false);
      // window.location.href = '/conocete';
    }
  };
  const handleEmpezarCuestionario = async () => {
    setEmpezarCuestionario(true);
    const url = '/api/cuestionarios/nuevoCuestionario';

    const resultado = await axios.post(url);
    setCuestionario(resultado.data.idCuestionario);

    const obtenerCiudades = async () => {
      const url = '/api/ciudades';
      const resultado = await axios.get(url);
      setCiudades(resultado.data);
    };

    obtenerCiudades();
  };
  const activeCheck = () => {
    setCheckBox(!checkBox);
  };

  const activeCheckPolitica = () => {
    setCheckBoxPoliticas(!checkBoxPoliticas);
  };
  //--------------------------------------------
  //Desbloquear propiedad que manda a la encuesta
  //--------------------------------------------
  return (
    <div>
      {empezarCuestionario ? (
        <div></div>
      ) : (
          <div>
            <HeaderVolver navPosition="right" />
          </div>
        )}

      {empezarCuestionario ? (
        <div>
          {modalFinishEvaluation.isOpen ? (
            <div className="container  marginPhone">
              {/* <br></br> */}
              <Row className="justify-content-md-center">
                <div
                  className="col-md-11"
                  style={{
                    backgroundColor: '#0D1B28',

                    //

                    position: 'absolute',
                    height: '80%',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      opacity: '0.5',
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    <Particles
                      id="particle-canvas"
                      params={{
                        particles: {
                          number: {
                            value: 120,
                          },
                          size: {
                            value: 2.5,
                          },
                          color: {
                            value: '#bd408d',
                          },
                          line_linked: {
                            color: '#1dcaee',
                          },
                          // shape: {
                          // 	type: 'bubble',
                          // },
                        },

                        interactivity: {
                          events: {
                            onhover: {
                              enable: true,
                              mode: 'repulse',
                            },
                            onclick: {
                              enable: true,
                              mode: 'push',
                            },
                            resize: true,
                          },
                        },
                      }}
                    ></Particles>
                  </div>
                </div>

                <div
                  className="col-md-12 marginLeftRightDesktop"
                  style={{
                    // backgroundColor: '#1C2833',
                    backgroundColor: 'rgba(0,0,0,0)',
                    paddingTop: '3%',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    paddingBottom: '3%',
                  }}
                >
                  <div className="marginBottonPhone marginLeftRightDesktop">
                    <h4>
                      Gracias por responder el cuestionario, en breve te
                      enviaremos tus resultados a tu correo electrónico
										</h4>
                    {error ? (
                      <div className="alert alert-danger mt-2 mb-3 text-center">
                        Todos los campos son obligatorios
                      </div>
                    ) : null}
                    <form onSubmit={handleSubmit}>
                      <div className="row form-group">
                        <div className=" col-md-6">
                          <Input
                            id="nombre"
                            label="Nombre"
                            labelHidden
                            hasIcon="right"
                            placeholder="Nombre"
                            name="NombreUsuario"
                            onChange={handleChange}
                            value={usuario.NombreUsuario}
                          ></Input>
                        </div>
                        <div className="col-md-6">
                          <Input
                            id="apellido"
                            label="Apellido"
                            labelHidden
                            hasIcon="right"
                            placeholder="Apellidos"
                            name="ApellidoUsuario"
                            onChange={handleChange}
                            value={usuario.ApellidoUsuario}
                          ></Input>
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-6 ">
                          <select
                            className="form-input selectClass"
                            name="IdCiudad"
                            value={usuario.IdCiudad}
                            onChange={handleChange}
                          >
                            <option value="">Ciudad</option>
                            {ciudades.map((ciudad) => (
                              <option
                                key={ciudad.idCiudad}
                                value={ciudad.idCiudad}
                              >
                                {ciudad.nombreCiudad}
                              </option>
                            ))}
                            {/* <option>Ciudad</option>
														<option>Arequipa</option>
														<option>Apurimac</option>
														<option>Iquitos</option>
														<option>Lima</option>
														<option>Loreto</option> */}
                          </select>
                        </div>
                        <div className=" col-md-6">
                          <Input
                            id="compania"
                            label="Compañia"
                            labelHidden
                            hasIcon="right"
                            placeholder="Compañía"
                            name="CompaniaUsuario"
                            onChange={handleChange}
                            value={usuario.CompaniaUsuario}
                          ></Input>
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-12">
                          <Input
                            id="email"
                            type="email"
                            label="E-mail"
                            labelHidden
                            hasIcon="right"
                            placeholder="Email"
                            name="EmailUsuario"
                            onChange={handleChange}
                            value={usuario.EmailUsuario}
                          ></Input>
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-12">
                          {checkBox ? (
                            <Input
                              id="telefono"
                              label="Telefono/Celular"
                              labelHidden
                              hasIcon="right"
                              placeholder="Teléfono"
                              name="TelefonoUsuario"
                              onChange={handleChange}
                              value={usuario.TelefonoUsuario}
                            ></Input>
                          ) : (
                              <div>
                                <br></br>
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="true"
                          name="checkbox"
                          onChange={activeCheck}
                        />
                        <label className="form-check-label labelCheckBox">
                          Deseo que me contacten por teléfono
												</label>
                      </div>
                      <br></br>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="true"
                          checked={checkBoxPoliticas}
                          name="checkboxPoliticas"
                          onChange={activeCheckPolitica}
                        />
                        <label className="form-check-label labelCheckBox">
                          Acepto las Condiciones y <SimpleModal />
                        </label>
                      </div>
                      <br></br>
                      <br></br>

                      {checkBoxPoliticas ? (
                        <div>
                          <Button
                            type="submit"
                            className="border-gradient-enviar border-gradient-purple-enviar buttonEnviar"
                          >
                            Enviar
													</Button>
                        </div>
                      ) : (
                          <div>
                            <Button
                              disabled
                              type="submit"
                              className="border-gradient-enviardisabled border-gradient-purple-enviardisabled buttonEnviarDisabled"
                            >
                              Enviar
													</Button>
                          </div>
                        )}
                    </form>
                  </div>
                </div>
              </Row>
            </div>
          ) : (
              <div>
                <div className="paddingContainerFlex backgroundEncuesta ">
                  <ContainerFlex>
                    {renderEvaluationSystem()}
                    {renderLoader()}
                    {renderMessage()}
                  </ContainerFlex>
                </div>
              </div>
            )}
        </div>
      ) : (
          <div
            className="container marginPhone"
            style={{
              marginTop: '3%',
            }}
          >
            <div className="row">
              <div
                className="col-md-11"
                style={{
                  backgroundImage: `url(${require(`../assets/images/background4.gif`)})`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  position: 'absolute',
                  // height: '76%',
                  height: '80%',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    // opacity: '0.5',

                    height: '100%',
                    width: '100%',
                  }}
                >
                  {/* <video id="background-video" loop autoPlay>
									<source src={urlVideo} type="video/mp4" />
									<source src={urlVideo} type="video/ogg" />
									Your browser does not support the video tag.
								</video> */}
                  {/* <Particles
									id="particle-canvas"
									params={{
										particles: {
											number: {
												value: 120,
											},
											size: {
												value: 2.5,
											},
											color: {
												value: '#bd408d',
											},
											line_linked: {
												color: '#1dcaee',
											},
											// shape: {
											// 	type: 'bubble',
											// },
										},

										interactivity: {
											events: {
												onhover: {
													enable: true,
													mode: 'repulse',
												},
												onclick: {
													enable: true,
													mode: 'push',
												},
												resize: true,
											},
										},
									}}
								></Particles> */}
                </div>
              </div>
              <div
                className="col-md-12"
                style={{
                  paddingTop: '10%',
                  paddingBottom: '10%',
                }}
              >
                <SectionHeader
                  data={sectionHeader}
                  className="center-content"
                  style={{ color: 'white' }}
                />

                <div style={{ textAlign: 'center' }}>
                  <button
                    type="button"
                    className="border-gradient-empezar buttonEmpezar"
                    onClick={handleEmpezarCuestionario}
                  >
                    EMPEZAR CUESTIONARIO
								</button>
                </div>

                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

Encuesta.propTypes = {
  match: PropTypes.object,
};

export default Encuesta;
