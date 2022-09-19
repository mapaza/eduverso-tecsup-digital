import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  z-index: -1;
  overflow: hidden;
  
  /* .thumb {
    position: absolute;
    left: 50%; % of surrounding element
    top: 50%;
    filter: blur(20px);
    width: 150%;
    transform: translate(-50%, -50%)
  } */
  .overlay {
    position: absolute;
    z-index: 10;
    width: 100%;
    top: 0px;
    /* height: 30vh; */
    background: rgba(0,0,0,0.65);
  }
  video {
    position: absolute;
    left: 50%; /*% of surrounding element */
    top: 50%;
    min-height: 100vh;
    object-fit: cover;
    filter: blur(1.2px);
    width: 100%;
    /* height: 100%; */
    transform: translate(-50%, -50%)
  }
`;
