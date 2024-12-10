import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Neue+Konstant+Grotesk:wght@400;500;700&display=swap&subset=latin-ext');

  body {
    margin: 0;
    font-family: 'Rajdhani', sans-serif;
    color: #06132A;
    overflow-x: hidden;
  }

  h1 {
  font-family: 'Neue Konstant Grotesk', sans-serif;
  font-size: 2.5rem; /* Desktop */
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Reduz tamanho no mobile */
  }
}

section {
  padding: 40px 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
}


  /* Responsividade */
  @media (max-width: 768px) {
    body {
      font-size: 90%; /* Reduz o tamanho base da fonte */
    }

    h1 {
      font-size: 1.8rem; /* Ajusta o tamanho do título */
    }

    section {
      padding: 20px 10px; /* Reduz o espaçamento nas seções */
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }

    section {
      padding: 10px 5px;
    }
  }
`;

export default GlobalStyles;
