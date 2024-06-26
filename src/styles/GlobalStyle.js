// styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: "Gayathri", sans-serif;
    background-color: #f0f0f0;
    color: white;
    overflow-x: hidden;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Crect id='r' width='1' height='1' fill='%23ccc'/%3E%3Canimate attributeName='x' from='-100' to='100' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='y' from='-100' to='100' dur='2s' repeatCount='indefinite'/%3E%3C/svg%3E");
    background-size: 300px 300px;
    background-repeat: repeat;
  }

`;

export default GlobalStyle;
