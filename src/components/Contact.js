import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
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
  margin-bottom: 30px;
`;

const Button = styled.a`
  background-color: #FC9807;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FB8402;
  }
`;

function Contact() {
  return (
    <ContactWrapper id="contact">
      <Title>Contato</Title>
      <Text>
        Entre em contato conosco para saber mais sobre nossos serviços e soluções.
      </Text>
      <Button href="mailto:contato@re7.com">Fale Conosco</Button>
    </ContactWrapper>
  );
}

export default Contact;
