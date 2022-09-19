import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  
  body {
    background: #0E0E0F;
    /* overflow-y: scroll; */
    overscroll-behavior-y: none;
  }

  a{
    text-decoration: none;
  }
`
