import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/RE7-LOGO-fundo-incolor-6.png';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Ajustado para mais responsividade */
  height: 120px;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const LogoWrapper = styled.img`
  height: 70px;
  margin-left: 10px; /* Margem ajustada */
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px; /* Espaçamento entre os itens */
  margin-right: 30px;

  a {
    color: #191970;
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #FC9807;
    }
  }

  @media (max-width: 768px) {
    display: none; /* Esconde o menu padrão no mobile */
  }
`;

const Button = styled.a`
  background-color: #FC9807;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-left: 20px;

  &:hover {
    background-color: #FB8402;
  }

  @media (max-width: 768px) {
    display: none; /* Esconde o botão no mobile */
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute; /* Ajusta a posição */
  right: 90px; /* Ajuste a posição horizontal */
  top: 50%; /* Centraliza verticalmente */
  transform: translateY(-50%); /* Corrige o deslocamento vertical */

  span {
    height: 3px;
    width: 25px;
    background: #191970;
    margin: 4px 0;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex; /* Mostra o ícone no mobile */
  }
`;

const MobileMenu = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 120px; /* Alinhado com a altura do navbar */
  right: 0;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;

  a {
    color: #191970;
    padding: 15px 20px;
    text-decoration: none;
    font-weight: bold;
    border-bottom: 1px solid #eee;

    &:hover {
      background: #FC9807;
      color: white;
    }
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <LogoWrapper src={Logo} alt="Re7 Logo" />
      <Nav>
        <a href="#hero">Início</a>
        <a href="#about">Sobre Nós</a>
        <a href="#services">Serviços</a>
        <a href="#portfolio">Cases</a>
        <a href="#contact">Contato</a>
        <Button href="#contact">Entre em Contato</Button>
      </Nav>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <MobileMenu open={menuOpen}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>Início</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>Sobre Nós</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Cases</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
      </MobileMenu>
    </HeaderWrapper>
  );
}

export default Header;
