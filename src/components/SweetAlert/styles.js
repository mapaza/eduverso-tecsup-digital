import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    /* visibility: hidden; */
    opacity: ${({ open }) => open ? 1 : 0};
    height: ${({ open }) => open ? '100vh' : '0px'};
    z-index: 100;
    /* opacity: 0; */

    /* :target{
        visibility: visible;
        opacity: 1;
    } */
    
    svg {
        fill: white;
        width: 100px;
        height: 100px;
        stroke: black;
        stroke-width: 1;
        stroke-linejoin: round;
        stroke-linecap: round;
    }
`;

const AlertBody = styled.div`
    width: 50%;
    padding: 2%;
    border-radius: 15px;
    box-shadow: 0 0 5px #CCC;
    background: #FFF;
    position: relative;
    margin: 20% auto;
    transition: all 5s ease-in-out;
    text-align: center;
    color: black;
    z-index: 100;
    overflow-x: auto;
    box-shadow:${({ open }) => open ? '-10px 0px 10px 1px rgba(0,0,0,0.1)' : 'none'}  ;
    
    p{
        margin: 5px auto;
    }

    @media screen and (max-width: 600px){
        margin: 50% auto;
    }
`;

const Button = styled.button`
    /* position: absolute; */
    bottom: 5%;
    right: 2%;
    margin: 5px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    transition: all 200ms;
    border-radius: 10px;
    
    &:hover {
        background: #ddd;
    }
`;

export {Container, AlertBody, Button};