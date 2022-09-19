import styled from 'styled-components';

const Container = styled.div`
    width: 200px;
    display: flex;
    place-content: center;
    overflow: hidden;
    
`;

const Item = styled.div`
    width: 50%;
    overflow: visible;
    margin: 0px 3px;
    stroke: white;
    stroke-width: 10;
    stroke-linejoin: round;
    stroke-linecap: round;
`;

export {Container, Item};