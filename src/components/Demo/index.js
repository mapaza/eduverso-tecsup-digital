// import React, { useEffect, useState } from "react";
// import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import { Container } from "./styles";
import Cookies from "universal-cookie";
// import Equipo from './nido_hidrociclon/nidoHidrociclon.html';
const cookies = new Cookies();

class Demos_test extends Component {
  // const [canRender, setCanRender] = useState(false);
  // const [title, setTitle] = useState("titlulo");
  // const [src, setSrc] = useState("enlace");
  // const id = 1;
  // const visorEquipos = require("./nido_hidrociclon/nido_hidrociclon.html");
  componentDidMount() {
    if (!cookies.get('token')) {
      window.location.href = "./login";
    }
  }
  // const setInformation = (title, src) => {
  //   setTitle(title);
  //   setSrc(src);
  //   setCanRender(true)
  // };

  // useEffect(() => {
  //   switch (id) {
  //     case 1:
  //       return setInformation(
  //         "Paseos virtuales",
  //         "./nido_hidrociclon/nido_hidrociclon.html"
  //       );
  //     default:
  //       return (
  //         <>
  //           {/* {setCanRender(false)} */}
  //           {console.log("no se renderiza nada")}
  //           <Redirect from="/demo" to="/404" />
  //         </>
  //       );
  //   }
  // });
  render() {
    return (
      <>
        {/* {canRender && ( */}
        <Container>
          <div className="header-demo">
            <h1>Demo 1</h1>
          </div>
          <main>
            <iframe
              title={"__Demo__"}
              frameBorder={0}
              src="https://nido-hidrociclon.vercel.app/nido_hidrociclon.html"
            />
          </main>
        </Container>
        {/* )} */}
      </>
    );
  }
}

export default Demos_test;
