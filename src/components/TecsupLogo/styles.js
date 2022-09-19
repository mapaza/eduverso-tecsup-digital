import styled from 'styled-components'

export const Container = styled.div`
    width: 80vw;
    /* height: 50%; */
    overflow: visible;
    stroke: white;
    stroke-width: 5;
    stroke-linejoin: round;
    stroke-linecap: round;
    z-index: 1;

    @media only screen and (min-width : 992px) {
      width: 40vw;
    }
`;
