import React, { useEffect } from 'react'
// import { motion } from 'framer-motion';
import { Route, useHistory, useLocation } from 'react-router-dom'
import { Container } from './styles'
import { Case1, Case2, Case3 } from './Case'

import SectionsWrapper from "../SectionsWrapper";
import BoxModel from "../FirstSection/BoxModel";
import Loader from "../Loader";
import Services from "../Services";

import Contact from "../Contact";
import Survey from "../Survey";

const Cases = () => {

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    // console.log("aqui");
    if (location.pathname === '/casos') {
      history.push("/casos/uso-de-realidad-mixta-en-el-montaje-y-desmontaje-de-rodamientos");
    }

  }, [location, history])

  return (
    <Container>
      <Route path='/casos/uso-de-realidad-mixta-en-el-montaje-y-desmontaje-de-rodamientos' component={Case1} />

      <Route path='/casos/plataforma-de-entrenamiento-con-elementos-virtuales-y-holográficos' component={Case2} />
      <Route path='/casos/empresas-mineras-e-industriales' component={Case3} />

      <Route exact path="/" component={SectionsWrapper} />
              <Route path="/servicios" component={Services} />
             
              <Route path="/contacto" component={Contact} />
              <Route path="/transformacion-digital" component={Survey} />
              <Route path="/demo" component={Demos_test} />
              <Route exact path="/login" component={Login} /> 
    </Container>
  )
}

export default Cases;
