import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 100px 20px;
  text-align: center;
  background-color: #f5f5f5;
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

function About() {
  return (
    <AboutWrapper id="about">
      <Title>Sobre Nós</Title>
      <Text>
        Somos a Re7, especialistas em comunicação e marketing digital, 
        ajudando empresas a alcançar melhores resultados com estratégias eficientes.
      </Text>
    </AboutWrapper>
  );
}

export default About;
