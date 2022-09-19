import styled from 'styled-components'


export const Container = styled.header`
  position: sticky;
  top: 0;
  height: 14vh;
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: space-between;
  color: white;
  z-index: 100;
  padding: 0px 5%;
  transition: color 0.4s ease;
  font-size: 2.8vh;
  img {
    transition: filter 0.4s ease;
    height: 8vh;
  }
  svg {
    cursor: pointer;
    font-size: 26px
  }

`


export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
  }
  

  .item{
    padding: 0 4vh;
    cursor: pointer;
    font-weight: 550;
    line-height: 28px;
    display: none;

    
  }

  .home {
    display: block;
  }

   

  @media only screen and (min-width : 992px) {
    justify-content: inherit;
    width: auto;
    .item{
      display: block;
    }
  }

  

  .separator{
    padding: 0px 20px ;
    font-weight: 300;
    font-size: 18px;
  }
`



export const Contact = styled.div`
  display: none;
  @media only screen and (min-width : 992px) {
    display: block;
  }

  .contact {
    display: flex;
    font-weight: 550;
    cursor: pointer;
    color: white;
    align-items: center;
  }
 
  .text {
    margin-right: 20px;
  }
  .circle{
    background: white;
    width: 30px;
    display: flex;
    align-items: center;
    color: #000;
    justify-content: center;
    height: 30px;
    border-radius: 50%;
  }
`

