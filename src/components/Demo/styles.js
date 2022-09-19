import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;

  main, iframe {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 991px){
    iframe{
        height: 90%;
      }
  }
`;
