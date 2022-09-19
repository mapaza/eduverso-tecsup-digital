import styled from 'styled-components';

export const Container = styled.div`

  position: relative;

  /* height: 250vh; */
  display: flex;
  flex-direction: column;

  .header {
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    /* top: -100px; */
    padding-top: 50px;
    padding-bottom: 50px;
position: relative;
    width: 100%;
    height: auto;
    
  }
  .first-img {
    position: relative;
    z-index: -1;
    filter: grayscale(1);
    height: 50vh;
    width: 100%;
    
    transition:  filter 0.3s ease;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover{
      filter: grayscale(0);;
    }
  }

  @media only screen and (min-width : 992px) {

    padding-top: 80px;

    .first-img {
      position: absolute;
      left: 40%;
      top: 80px;
      height: calc(100vh - 80px);
    }

    .header {
      padding-top: 0px;
      padding-bottom: 50px;
      width: 70%;
      height: calc(100vh - 80px);

    }
  }
`;

