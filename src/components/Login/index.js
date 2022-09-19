import React, { Component } from "react";
import axios from "axios";
// import md5 from "md5";
import { Container } from "./styles";
import Cookies from "universal-cookie";

const baseURL = "/api/authdemo/login";
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    // console.log(this.state.form);
  };

  iniciarSesion = async () => {
    await axios
      .post(baseURL, {
          Usuario: this.state.form.username,
          Contrasenia: this.state.form.password,
        },
      )
      .then(response => {
        // console.log(`response.data[0] ${response.data[0].token}`);
        // console.log(`response.data ${response.data.token}`);
        if (response.data.token != null) {
          // console.log("si entro al if")
          var respuesta = response.data;
          cookies.set("token", respuesta.token, { path: "/" });
          cookies.set("idDemo", respuesta.demo, { path: "/" });
          cookies.set("fecha", respuesta.expirationDate, { path: "/" });
          alert(`Bienvenido`);
          window.location.href = "./demo";
        } else {
          // console.log(response[0].token);
          alert("El usuario o la contraseña es incorrecta");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    if (cookies.get("token")) {
      window.location.href = "./demo";
    }
  }

  /* para recibir 
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlcl8kTHdFNSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIyLTA0LTIwMjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiI0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzMiIsIm5iZiI6MTYxODI1MzQ2MywiZXhwIjoxNjE4MzM5ODYzLCJpc3MiOiJCbGlua2luZ2NhcmV0IiwiYXVkIjoiQW55b25lIn0.via4aNAyenXw5wwpt9J9sxZUl6qy_je7rLk02CEAKbw",
  "demo": 4,
  "expirationDate": "2021-04-22T13:21:51.573"
   */

  render() {
    console.log;
    return (
      <Container>
        <div className="form">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="usuario"
              onChange={this.handleChange}
              autoComplete="off"
            />
            <br />
            <label>Contraseña:</label>
            <br />
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={this.handleChange}
            />
            <br />
            <button onClick={() => this.iniciarSesion()}>Iniciar sesión</button>
          </div>
        </div>

      </Container>
    );
  }
}

export default Login;
