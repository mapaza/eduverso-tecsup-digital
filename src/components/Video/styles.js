import styled from 'styled-components';


const Container = styled.div`
    width: 400px;
    height: 300px;
    display: flex;
    place-content: center;
    overflow: hidden;
    border-radius: 30px;
`;

const Item = styled.div`
    width: 100%;
    height: 50%;
    overflow: visible;
`;

const Video = styled.video`
    width: 50%;
    border-color: black;
    filter: blur(10px);
    position: fixed;
    /* position: absolute; */
`;
export {Container, Item, Video}