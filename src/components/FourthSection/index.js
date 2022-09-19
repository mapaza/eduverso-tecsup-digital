import axios from 'axios';
import React, { forwardRef, useCallback, useMemo, useState } from 'react';

import { Container, Location, Campus, Form, SurveyButton } from './styles';

// import BackgroundVideo from '../BackgroundVideo';
// import { useLocation } from 'react-router-dom'
// import useSmoothScrolling from '../../hooks/useSmoothScrolling';


const initialContactProps = {
  contactForm: true,
  contactSend: false,
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

async function sendData(data) {
  const url = "/api/usuarios"
  await axios.post(url, data);
}


function Contact(props, ref) {

  const [survey, setSurvey] = useState(initialContactProps);

  const onSubmit = useCallback(async (data) => {
    try {
      const contactInfo = parseUser(data);
      sendData(contactInfo);


      setSurvey(s => ({ ...s, contactSend: true }))
      setSurvey(s => ({ ...s, contactForm: false }))
    } catch (err) {
      console.log(err);
    }

  }, [])

  const onEndSurvey = useCallback(async () => {
    setSurvey(initialContactProps)
  }, [])

  const renderContactForm = useMemo(() => {
    if (survey.contactForm) {
      return (
        <Form className="contact-form" textButton="Enviar" onSubmit={onSubmit} />
      )
    };
  }, [survey.contactForm, onSubmit]);

  const renderSuccessMessage = useMemo(() => {
    if (survey.contactSend) {
      return (
        <div className="cuerpo">
          <div className="titulo">Gracias por comunicarte con nosostros</div>
          <div className="descripcion">Nos estaremos comunicando lo mas breve posible</div>
          <SurveyButton onClick={onEndSurvey}>
            Ok
          </SurveyButton>
        </div>
      )
    }
  }, [survey.contactSend, onEndSurvey])



  return (
    <Container ref={ref}>
      {renderContactForm}
      {renderSuccessMessage}
      <Location>
        <div className="title">Sedes</div>
        <Campus>
          <div className="campus">Arequipa</div>
          <div className="address">
            <span>Dirección: </span>
          Urb. Monterrey Lote D-8, José Luis Bustamante y Rivero
        </div>
          <div className="phone">
            <span>Telefono: </span>
          (54) 426610 anexos: 2308 – 2310
        </div>
        </Campus>
        <Campus>
          <div className="campus">Lima</div>
          <div className="address">
            <span>Dirección: </span>
            Av. Cascanueces 2221 Sta. Anita. Lima
        </div>
          <div className="phone">
            <span>Telefono: </span>
            317-3900
        </div>
        </Campus>
        <Campus>
          <div className="campus">Trujillo</div>
          <div className="address">
            <span>Dirección: </span>
            Mz. A Sub lote 1 Urbanización Tecsup Víctor Larco Herrera, Trujillo
        </div>
          <div className="phone">
            <span>Telefono: </span>
          (044) 485420 anexos: 6000/6503/6506
        </div>
        </Campus>
      </Location>
    </Container>

  );
}

export default forwardRef(Contact);
