import styled from 'styled-components';

const Container = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    place-content: center;
    overflow: hidden;
    border-radius: 30px;
`;

const Item = styled.div`
    width: 50%;
    overflow: visible;
    stroke: white;
    stroke-width: 10;
    stroke-linejoin: round;
    stroke-linecap: round;

    :hover{
        cursor: pointer;
    }
`;

const Circulo = styled.div`
    position: relative;
    justify-content: center;
    top: 60px;
    right: 2px;
    z-index: 1;
    color: white;
`;

export {Container, Item, Circulo}