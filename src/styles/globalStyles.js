import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Neue+Konstant+Grotesk:wght@400;500;700&display=swap&subset=latin-ext');

  body {
    margin: 0;
    font-family: 'Rajdhani', sans-serif;
    color: #06132A;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Neue Konstant Grotesk', sans-serif;
  }

  section {
    background: rgba(255, 255, 255, 0.85); /* Fundo branco semi-transparente */
    padding: 40px 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve */
  }
`;

export default GlobalStyles;
