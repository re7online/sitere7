import React from 'react';
import styled from 'styled-components';
import Icon1 from '../assets/RE7-LOGO-fundo-incolor-10.png'; // Adicione ícones
import Icon2 from '../assets/RE7-LOGO-fundo-incolor-17.png';

const ServicesWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 50px;
  background-color: #F2F2F2;
  /* Fundo escuro semi-transparente */
  background: rgba(255, 228, 196, 0.2);
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const ServiceCard = styled.div`
  text-align: center;
  max-width: 300px;

  img {
    height: 100px;
  }

  h3 {
    margin: 10px 0;
    font-size: 20px;
  }
`;

function Services() {
  return (
    <ServicesWrapper id="services">
      <ServiceCard>
        <img src={Icon1} alt="Serviço 1" />
        <h3>Gestão de Mídias</h3>
        <p>Descrição do serviço</p>
      </ServiceCard>
      <ServiceCard>
        <img src={Icon2} alt="Serviço 2" />
        <h3>Identidade Visual</h3>
        <p>Descrição do serviço</p>
      </ServiceCard>
    </ServicesWrapper>
  );
}

export default Services;
