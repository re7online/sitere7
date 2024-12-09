import React from 'react';
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
  padding: 0 40px; /* Margem lateral ajustada */
  height: 120px; /* Altura fixa para compensar */
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  transition: background-color 0.5s ease; /* Transição suave */
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0px 4px 6px rgba(0, 0, 0, 0.2)' : '0px 2px 5px rgba(0, 0, 0, 0.1)'};
`;

const LogoWrapper = styled.img`
  height: 70px;
  margin-left: 5%;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px; /* Espaçamento entre os itens */
  margin-right: 20px;

  a {
    color: ${({ isScrolled }) => (isScrolled ? '#FFFFFF' : '#191970')};
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #FC9807;
    }
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
  margin-right: 10%;
  margin-left: 20%;

  &:hover {
    background-color: #FB8402;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%; /* Certifique-se de ocupar todo o espaço disponível */
`;

function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper src={Logo} alt="Re7 Logo" />
      <NavWrapper>
        <Nav>
          <a href="#hero">Início</a>
          <a href="#about">Sobre Nós</a>
          <a href="#services">Serviços</a>
          <a href="#portfolio">Cases</a>
          <a href="#contact">Contato</a>
        </Nav>
        <Button href="#contact">Entre em Contato</Button>
      </NavWrapper>
    </HeaderWrapper>
  );
}

export default Header;


