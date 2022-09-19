import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0px;
  z-index: -1;
  
  .thumb {
    position: absolute;
    /* left: 50%; /* % of surrounding element */
    /* top: 50%; */
    filter: blur(10px);
    object-fit: cover;
    width: 100%;
    min-height: 100vh;
    /* transform: translate(-50%, -50%) */
  }
  .overlay {
    position: absolute;
    z-index: 10;
    width: 100%;
    top: 0px;
    height: 100vh;
    background: rgba(0,0,0,0.65);
  }
  video {
    position: absolute;
    /* left: 50%; /* % of surrounding element */
    /* top: 50% */
    object-fit: cover;
    min-height: 100vh;
    filter: blur(2px);
    width: 100%;
    /* transform: translate(-50%, -50%) */
  }
`;
