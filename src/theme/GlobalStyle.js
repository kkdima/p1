import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {
    font-family: 'Chivo', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Chivo');
 }
`;

export default GlobalStyle;