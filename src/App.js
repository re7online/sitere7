import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      {/* Estilos globais para garantir consistência visual */}
      <GlobalStyles />
      
      {/* Header fixo com navegação */}
      <Header />
      
      <main>
        {/* Seção Hero */}
        <HeroSection id="hero" />

        {/* Carousel */}
        <Carousel />
        
        {/* Seção Sobre Nós */}
        <About id="about" />
        
        {/* Seção de Serviços */}
        <Services id="services" />
        
        {/* Seção de Portfólio/Clientes */}
        <Portfolio id="portfolio" />
        
        {/* Seção de Contato */}
        <Contact id="contact" />
      </main>
      
      {/* Rodapé */}
      <Footer />
    </>
  );
}

export default App;
