import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/RE7-LOGO-fundo-incolor-4.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200vh; /* Altura grande para permitir a rolagem */
  background-color: #f5f5f5; /* Cor de fundo para destacar o logo */
`;

const RotatingLogo = styled.img`
  height: 200px;
  width: 200px;
  transform: rotate(${(props) => props.rotation}deg);
  transition: transform 0.1s linear;
`;

function App() {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setRotation(scrollY); // A rotação será baseada na posição de rolagem
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <RotatingLogo src={Logo} alt="Rotating Logo" rotation={rotation} />
    </Container>
  );
}

export default App;
