import React from "react";
import { Chat, HeroCard } from "@progress/kendo-react-conversational-ui";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { ApiAiClient } from "api-ai-javascript";
import {
  ChatStyle,
  HeaderChatBot,
  Row,
  CentrarHeader,
  Col3,
  BtnCerrar,
  BtnChat,
} from "./styles";
import "./ChatStyles.css";
import imageChat from '../../assets/images/ventana-de-chat.png'
import imageAvatar from '../../assets/images/bot_tecsup.png'
// import CloseRounded from '@material-ui/icons/CloseRounded';

class ChatBot extends React.Component {
  // constructor(props) {
  // 	super(props);
  // 	this.state = {
  // 		mostrarChat: false,
  // 		messages: []
  // 	};
  // 	this.handlerEvento = this.handlerEvento.bind(this);
  // }

  // Fulfillment Dialog flow
  // ----------------------------------------------------------------------
  // en package.json
  // "dependencies":{
  // 	...,
  // 	"axios": "0.19.2",
  // }
  //----------------------------------
  //en index.js
  // const axios = require('axios');

  // function infoUsuario(agent) {
  // 	//pasando parametors
  // 	const nombre = agent.parameters.nombre;
  // 	const telefono = agent.parameters.telefono;
  // 	const correo = agent.parameters.correo;
  // 	const informacionUsuario = [{'nombre':nombre, 'telefono': telefono, 'correo': correo}]
  // 	axios.post(`http://www.tecsup-aqp.edu.pe/tecsupdigital/api/usuarios`,informacionUsuario)
  // 		.then((result)=>{
  // 			console.log(result.data);
  // 			agent.add('Gracias por confiar en nosotros ' + nombre + 'en breve te enviaremos un correo');
  // 		})
  // 	// llamada de prueba
  // 	agent.add('llamando al intento');

  // }
  // let intentMap = new Map();
  // // intentMap.set('your intent name here', yourFuncionHandlerHere);
  // intentMap.set('InformacionUsuario', infoUsuario);
  // agent.handleRequest(intentMap);
  // ----------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = { mostrarChat: false, messages: [] };
    this.client = new ApiAiClient({
      //accessToken: 'd3d91773ebc24be5811a919c4047c527',
      accessToken: "92a27482236a4eceb4490af8e5915539",
    });
    this.client.eventRequest("Welcome").then(this.onResponse, this);
    this.user = {
      id: 1,
      name: "Invitado",
    };
    this.bot = {
      id: "botty",
      name: "Tecsup",
      avatarUrl: imageAvatar,
    };
    this.addNewMessage = this.addNewMessage.bind(this);
    this.handlerEvento = this.handlerEvento.bind(this);
  }

  handlerEvento() {
    this.setState({
      mostrarChat: !this.state.mostrarChat,
    });
  }
  ??ttachmentTemplate = (props) => {
    let attachment = props.item;
    if (attachment.type === "quote") {
      return (
        <div className="k-card k-card-type-rich">
          <div className="k-card-body">
            <div>
              <strong>Type:</strong>
              <span>{attachment.coverage}</span>
            </div>
            <div>
              <strong>Car model:</strong>
              <span>{attachment.make}</span>
            </div>
            <div>
              <strong>Car cost:</strong>
              <span>{attachment.worth}</span>
            </div>
            <div>
              <strong>Start date:</strong>
              <span>{attachment.startDate}</span>
            </div>
            <hr />
            <div>
              <strong>Total:</strong>
              <span>{attachment.premium}</span>
            </div>
          </div>
        </div>
      );
    } else if (attachment.type === "payment_plan") {
      return (
        <div className="k-card k-card-type-rich">
          <div className="k-card-body">
            {attachment.rows.map((row, index) => (
              <div key={index}>{row.text}</div>
            ))}
            <hr />
            <div>
              <strong>Total:</strong>
              <span>{attachment.premium}</span>
            </div>
          </div>
        </div>
      );
    } else if (attachment.type === "calendar") {
      return (
        <Calendar
          onChange={(event) => {
            this.addNewMessage(event);
          }}
        />
      );
    }
    return (
      <HeroCard
        title={attachment.title}
        imageUrl={attachment.images ? attachment.images[0].url : ""}
        subtitle={attachment.subtitle ? attachment.subtitle : ""}
        actions={attachment.buttons}
        onActionExecute={this.addNewMessage}
      />
    );
  };
  // eslint-disable-next-line
  parseActions = (actions) => {
    if (actions !== undefined) {
      // eslint-disable-next-line
      actions.map((action) => {
        if (action.type === "postBack") {
          action.type = "reply";
        }
      });
      return actions;
    }
    return [];
  };

  parseText = (event) => {
    if (event.action !== undefined) {
      return event.action.value;
    } else if (event.value) {
      return event.value;
    } else {
      return event.message.text;
    }
  };

  onResponse = (activity) => {
    let that = this;
    activity.result.fulfillment.messages.forEach(function (element) {
      let newMessage;
      newMessage = {
        text: element.speech,
        author: that.bot,
        timestamp: new Date(activity.timestamp),
        suggestedActions: element.replies
          ? element.replies.map((x) => {
              return { type: "reply", title: x, value: x };
            })
          : [],
      };
      that.setState((prevState) => {
        return { messages: [...prevState.messages, newMessage] };
      });
    });

    if (activity.result.fulfillment.data) {
      let newMessage;
      newMessage = {
        text: "",
        author: that.bot,
        timestamp: new Date(activity.timestamp),
        suggestedActions: activity.result.fulfillment.data.null.suggestedActions
          ? this.parseActions(
              activity.result.fulfillment.data.null.suggestedActions
            )
          : [],
        attachments: activity.result.fulfillment.data.null.attachments
          ? activity.result.fulfillment.data.null.attachments
          : [],
      };
      that.setState((prevState) => {
        return { messages: [...prevState.messages, newMessage] };
      });
    }

    if (
      activity.result.fulfillment.speech ===
      "When do you want your insurance to start?"
    ) {
      this.setState((prevState) => {
        return {
          messages: [
            ...prevState.messages,
            {
              author: this.bot,
              timestamp: new Date(activity.timestamp),
              attachments: [{ type: "calendar" }],
            },
          ],
        };
      });
    }
  };

  addNewMessage = (event) => {
    let value = this.parseText(event);
    this.client.textRequest(value.toString()).then(this.onResponse, this);
    if (!event.value) {
      this.setState((prevState) => {
        return {
          messages: [
            ...prevState.messages,
            { author: this.user, text: value, timestamp: new Date() },
          ],
        };
      });
    }
  };
  render() {
    return (
      <div>
        <ChatStyle
          style={{ visibility: this.state.mostrarChat ? "visible" : "hidden" }}
        >
          <HeaderChatBot>
            <Row>
              <CentrarHeader>Transformaci??n Digital</CentrarHeader>
              <Col3>
                <BtnCerrar onClick={this.handlerEvento}>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 341.751 341.751"
                  >
                    <g>
                      <g>
                        <rect
                          x="-49.415"
                          y="149.542"
                          transform="matrix(0.7072 -0.707 0.707 0.7072 -70.7868 170.8326)"
                          width="440.528"
                          height="42.667"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          x="149.569"
                          y="-49.388"
                          transform="matrix(0.707 -0.7072 0.7072 0.707 -70.7712 170.919)"
                          width="42.667"
                          height="440.528"
                        />
                      </g>
                    </g>
                  </svg>

               
                </BtnCerrar>
              </Col3>
            </Row>
          </HeaderChatBot>
          <Chat
            messages={this.state.messages}
            user={this.user}
            onMessageSend={this.addNewMessage}
            attachmentTemplate={this.??ttachmentTemplate}
          />
          {/* <Iframe
						allow="microphone;"
						width="350"
						height="430"
						src="https://console.dialogflow.com/api-client/demo/embedded/2f6df53b-98ff-455b-bc88-6445b9900261"
					></Iframe> */}
        </ChatStyle>

        <BtnChat
          type="button"
          style={{
            visibility: this.state.mostrarChat ? "hidden" : "visible",
          }}
          onClick={this.handlerEvento}
        >
          <img
            src={imageChat}
            alt=""
          />
        </BtnChat>
      </div>
    );
  }
}

export default ChatBot