import React, { useCallback, useMemo, useRef, useState } from 'react';
import axios from 'axios'
// import { MdKeyboardArrowRight } from 'react-icons/md'
import { Container, SurveyButton } from './styles';
import BackgroundVideo from '../BackgroundVideo';
// import { useLocation } from 'react-router-dom'

import stripHtml from 'string-strip-html';

import useSmoothScrolling from '../../hooks/useSmoothScrolling';
import { EvaluationsSystem } from '../Encuesta/EvaluationsSystem';
import ContactForm from '../ContactForm';
import { preguntas } from '../Encuesta/preguntas';
// import ShowMore from '../Services/ShowMore';

const initialSurveyProps = {
  running: false,
  complete: false,
  sendSurvey: false,
  id: null,
  answers: {},
  questions: preguntas
}

function parseUser(data) {
  return {
    NombreUsuario: data.nombres,
    ApellidoUsuario: data.apellidos,
    IdCiudad: data.ciudad,
    EmailUsuario: data.email,
    CompaniaUsuario: data.compania,
    IdDemo: '1',
    TelefonoUsuario: data.telefono,
  }
}

function parseAnswers(answers, questions, idSurvey) {
  const data = []
  Object.keys(answers).forEach((key) => {
    const answer = {
      ValorRespuesta: answers[key],
      IdPregunta: parseInt(key),
      ContenidoPregunta: stripHtml(questions.find((x) => x.idPregunta === parseInt(key)).contenido).result,
      IdCuestionario: idSurvey,
      IdAreaConocimiento: questions.find((x) => x.idPregunta === parseInt(key)).idAreaConocimiento,
    };
    data.push(answer);
  });

  return data;
}

async function createSurvey() {
  const url = '/api/cuestionarios/nuevoCuestionario';

  const survey = await axios.post(url);

  return survey.data.idCuestionario;
}


async function sendSurvey(idSurvey, user, answers) {
  const url = `/api/cuestionarios/${idSurvey}/crearRespuestas`

  await axios.put(url, { ...user, respuestas: answers });
}

function Survey() {

  const wrapperRef = useRef(null);
  const [survey, setSurvey] = useState(initialSurveyProps)

  useSmoothScrolling(wrapperRef);

  const onStartSurvey = useCallback(async () => {

    setSurvey(s => ({ ...s, running: true }))
    const id = await createSurvey();

    setSurvey(s => ({ ...s, id }))
  }, [])


  const onEndSurvey = useCallback(async () => {
    setSurvey(initialSurveyProps)
  }, [])

  const onCheckAlternative = useCallback((value, idPregunta) => {
    setSurvey(s => ({
      ...s, answers: {
        ...s.answers,
        [idPregunta]: value
      }
    }))
  }, [])


  const onFinishSurvey = useCallback(() => {
    setSurvey(s => ({ ...s, complete: true }))
  }, [])

  const onSubmit = useCallback(async (data) => {


    const answers = parseAnswers(survey.answers, survey.questions, survey.id);
    const user = parseUser(data);

    await sendSurvey(survey.id, user, answers)

    setSurvey(s => ({ ...s, sendSurvey: true }))
  }, [survey.id, survey.answers, survey.questions])

  const renderEvaluation = useMemo(() => {
    if (survey.running && !survey.complete) {
      return (
        <EvaluationsSystem
          questions={survey.questions}
          onCheckAlternative={onCheckAlternative}
          onFinishEvaluation={onFinishSurvey} />
      )
    }
  }, [
    survey.running,
    survey.complete,
    onCheckAlternative,
    onFinishSurvey,
    survey.questions])


  const renderStart = useMemo(() => {
    if (!survey.running) {
      return (
        <div className="body">
          <div className="title">Comience Ahora</div>
          <div className="description">Con la ayuda de este cuestionario, analice el grado de madurez digital de su organización, y con nuestra ayuda, encuentre el camino que su empresa requiere para empezar a crecer digitalmente.</div>
          <SurveyButton onClick={onStartSurvey}>
            Empezar el cuestionario
            </SurveyButton>
        </div>
      )
    }
  }, [survey.running, onStartSurvey])



  const renderContactForm = useMemo(() => {
    if (survey.complete && !survey.sendSurvey) {
      return (
        <ContactForm textButton="Enviar" onSubmit={onSubmit} />
      )
    }
  }, [survey.complete, survey.sendSurvey, onSubmit])


  const renderSuccessMessage = useMemo(() => {
    if (survey.sendSurvey && survey.running) {
      return (
        <div className="body">
          <div className="title">Gracias por llenar la encuesta</div>
          <div className="description">Le enviaremos un correo para que vea sus resultados</div>
          <SurveyButton onClick={onEndSurvey}>
            Ok
          </SurveyButton>
        </div>
      )
    }
  }, [survey.sendSurvey, survey.running, onEndSurvey])


  const renderOverlay = useMemo(() => {
    if (!survey.running) {
      return (
        <BackgroundVideo src="https://res.cloudinary.com/dfxv7hzza/video/upload/v1602556273/Tecsup/flor_motion_graphics.mp4" thumb="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602456479/Tecsup/Big_data.png" />
      )
    }
  }, [survey.running])


  return (
    <Container ref={wrapperRef}>
      <div className="content">
        {renderStart}
        {renderEvaluation}
        {renderContactForm}
        {renderSuccessMessage}
      </div>
      {renderOverlay}
    </Container>
  );
}

export default Survey;
