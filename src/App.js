import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import SectionsWrapper from "./components/SectionsWrapper";
import BoxModel from "./components/FirstSection/BoxModel";
import Loader from "./components/Loader";
import Services from "./components/Services";
import Cases from "./components/Cases";
import Contact from "./components/Contact";
import Survey from "./components/Survey";
import LoaderContext from "./components/Loader/LoaderContext";
import ChatBot from "./components/ChatBot";

// import Header from './components/Header';
import { Main } from "./styles/styles";
import { useRef } from "react";
// import ReactGA from 'react-ga';

import modelBomba from "./assets/hidrociclon2/hidrociclon.glb";
import modelHidrociclon from "./assets/turbine/bomba.glb";
import Layout from "./components/Layout";
import Demos_test from './components/Demo'
import Login from './components/Login'

export default function App() {
  // ReactGA.initialize('UA-167945668-1');

  // const trackPage = (page) => {
  //   ReactGA.set({ page });
  //   ReactGA.pageview(page);
  // };

  // const childRef = useRef();
  // let location = useLocation();

  // useEffect(()=>{
  //   const page = location.pathname;
  //   document.body.classList.add('is-loaded');
  //   childRef.current.init();
  //   trackPage(page);
  // }, [location]);
  // const location = useLocation();
  const mesh = useRef(null);
  const mesh2 = useRef(null);

  // console.log(location);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  // console.log(window.location.pathname !== "/");

  return (
    <Main>
      <LoaderContext>
       
          <Layout>
            {/* <Header /> */}
            <div
              style={{
                opacity: 0,
                zIndex: -1,
                overflow: "hidden",
                width: 1,
                height: 1,
                position: "absolute",
              }}
            >
              {window.location.pathname !== "/" && (
                <BoxModel mesh={mesh} pathModel={modelHidrociclon} />
              )}
              {window.location.pathname !== "/" && (
                <BoxModel mesh={mesh2} pathModel={modelBomba} />
              )}
            </div>

            
              {/*<Route exact path="/">
                <SectionsWrapper/>
              </Route>
              <Route path="/servicios">
                <Services/>
              </Route>
              <Route path="/casos">
                <Cases/>
              </Route>
              <Route path="/contacto">
                <Contact/>
              </Route>
              <Route path="/transformacion-digital">
                <Survey/>
              </Route>
              <Route path="/demo">
                <Demos_test/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>*/}
              <Route exact path="/" component={SectionsWrapper} />
              <Route path="/servicios" component={Services} />
              <Route path="/casos" component={Cases} />
              <Route path="/contacto" component={Contact} />
              <Route path="/transformacion-digital" component={Survey} />
              <Route path="/demo" component={Demos_test} />
              <Route exact path="/login" component={Login} /> 
               <Route exact path="/" component={SectionsWrapper} />
              <Route path="/servicios" component={Services} />
              <Route path="/casos" component={Cases} />
              <Route path="/contacto" component={Contact} />
              <Route path="/transformacion-digital" component={Survey} />
              <Route path="/demo" component={Demos_test} />
              <Route exact path="/login" component={Login} /> 
              {/* <Route path="*" component={NotFound} /> */}
            
            <Loader />
            <GlobalStyles />
          </Layout>
        
        <ChatBot />
      </LoaderContext>
    </Main>
  );
}
