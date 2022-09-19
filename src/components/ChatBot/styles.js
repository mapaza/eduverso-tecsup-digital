import styled from 'styled-components'

const ChatStyle = styled.div`
    position: fixed;
    bottom: 8%;
    right: 5px;
    width: 350px;
    height: 450px;
    
    -webkit-box-shadow: 1px 1px 15px 1px rgba(0,0,0,0.3);
    -moz-box-shadow: 1px 1px 15px 1px rgba(0,0,0,0.3);
    // box-shadow: 1px 1px 15px 10px rgba(0,0,0,0.7);

    @media screen and (max-width: 768px){
        width: 300px;
        // height: 70%;
    }
    z-index: 999;
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px;
    
`;

const HeaderChatBot = styled.div`
    /* width: 350px;
    height: 50px; */
    background-color: black;
    color: white;
    /* border-top-left-radius: 10px;
    border-top-right-radius: 10px;*/
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: right;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    height: 60px;
    font-weight: 500;
    box-shadow: 0 15px 25px -13px rgba(0,0,0,.13);
    padding: 0 .8rem;
    overflow: hidden;
    z-index: 5;
`;

const Row = styled.div`
    display: flex;
    flex: 1 1 auto;
    box-sizing: border-box;
    align-items: stretch;
    padding-left: 1rem !important;
    padding-top: .5rem !important;
    text-align: left;
`;

const CentrarHeader = styled.div`
    vertical-align: middle;
    justify-content: right;
    font-weight: bold;
    flex: 0 0 75%;
    max-width: 75%;
`;

const Col3 = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    text-align: center;
    vertical-align: middle;
`;

const BtnCerrar = styled.div`
    /* background-color: #14aecd; */
    margin-left: 22px;
    top: auto;
    text-align: center;
    justify-content: center;
    vertical-align: middle;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
    transition: background-color .3s ease;
    border-radius: 100%;
    width: 20px;
    height: 20px;

    :hover{
        background-color: rgba(0,0,0,0.5);
        svg{
            fill: #FF2172;
            transform: rotate(90deg);
        }
    }

    svg{
        fill: #fff;
        transition: transform .3s ease;
    }
    
`;

const BtnChat = styled.div`
    width: 70px;
    height: 70px;
    padding: 10px 16px;
    font-size: 24px;
    line-height: 1.33;
    border-radius: 35px;
    text-align: center;
    background-color: white;
    -webkit-box-shadow: 1px 1px 15px 1px rgba(0,0,0,0.3);
    -moz-box-shadow: 1px 1px 15px 1px rgba(0,0,0,0.3);
    box-shadow: 1px 1px 15px 1px rgba(0,0,0,0.3);
        /* #14aecd; */
    position: fixed;
    bottom: 2%;
    right: 2%;
    display: inline-block;
    font-weight: 400;
    color: #212529;
    vertical-align: middle;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .75rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    z-index: 999;
    /* border-radius: .25rem; */
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    img{
        display: block;
        height: auto;
        max-width: 100%;
        border-radius: 2px;
        border-style: none;
        box-sizing: inherit;
    }

    @media screen and (max-width: 768px){
        width: 60px;
        height: 60px;
    }
`;

const ContainerChat = styled.div`
    border-color: rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.87);
    background-color: #fafafa;
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    outline: 0;
    font-family: Roboto, "Helvetica Neue", sans-serif;
    font-size: 14px;
    line-height: 2;
    height: 600px;
    max-height: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    max-width: 500px;
    margin: auto;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;   
`;

const KMessageList = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: start;
    align-items: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
`;

const KMessageContentainer = styled.div`
    padding: 16px 16px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: start;
    align-items: flex-start;
    overflow: hidden;
`;

const KTimestamp = styled.div`
    text-transform: uppercase;
    opacity: .7;
    font-size: smaller;
    line-height: normal;
    text-align: center;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    display: none;
`;

const KMessageContent = styled.div`
    padding-left: 40px;
    align-items: flex-start;
    text-align: left;
    max-width: 70% !important;
    background: none;
    box-sizing: border-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
`;

const Avatar = styled.img`
    left: 0;
    bottom: 0;
    border-radius: 100%;
    width: 32px;
    height: 32px;
    margin: 0;
    position: absolute;
    width: 32px;
    height: 32px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;

    .img{
        max-width: 100%;
    }
`;

const KAutor = styled.div`
    font-weight: bold;
    margin: 0px;
    font-size: smaller;
    line-height: normal;
`;

const KMessage = styled.div`
    max-width: 100%;
    margin: 2px 0 0;
    position: relative;
    transition: margin .2s ease-in-out;
    outline: none;
`;

const KBubble = styled.div`
    border-color: white;
    color: rgba(0, 0, 0, 0.87);
    background-color: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    -ms-flex-order: -1;
    order: -1;
    border-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 8px 12px;
    border-width: 1px;
    border-style: solid;
    line-height: 1.25;
    word-wrap: break-word;
    border-bottom-left-radius: 2px;
`;

export {ChatStyle, HeaderChatBot, Row, CentrarHeader, Col3, BtnCerrar, BtnChat, ContainerChat, KMessageList, KMessageContentainer, KTimestamp, KMessageContent, KMessage, KBubble, KAutor, Avatar};