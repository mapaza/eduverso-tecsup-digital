import styled from 'styled-components';

const Container = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    place-content: center;
    overflow: hidden;
    border-radius: 30px;
`;

const Item = styled.div`
    position: relative;
    width: 50%;
    height: 50%;
    overflow: visible;
    padding: 1px;
    stroke: white;
    stroke-width: 1;
    stroke-linejoin: round;
    stroke-linecap: round;
    z-index: 1;

`;

const Circulo = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    justify-content: center;
    border: 1px solid white;
    border-radius: 50%;
    z-index: -2;
`;

export {Container, Item, Circulo};