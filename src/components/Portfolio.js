import React from 'react';
import styled from 'styled-components';

const PortfolioWrapper = styled.section`
  padding: 100px 20px;
  text-align: center;
  background-color: #ffffff;
  /* Fundo escuro semi-transparente */
  background: rgba(255, 228, 196, 0.2);
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #191970;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

function Portfolio() {
  return (
    <PortfolioWrapper id="portfolio">
      <Title>Portfólio</Title>
      <Text>
        Confira alguns de nossos projetos de sucesso e veja como podemos ajudar sua empresa.
      </Text>
    </PortfolioWrapper>
  );
}

export default Portfolio;
