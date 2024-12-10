import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import styled from 'styled-components';

import Video1 from '../assets/Cópia-de-coelho-Vídeo.mp4';
import Video2 from '../assets/CHAPELEIRO.mp4';
import Video3 from '../assets/BORBOLETA.mp4';
import Video4 from '../assets/RAINHA.mp4';

const HeroWrapper = styled.section`
  height: 85vh;
  display: flex;
  flex-direction: row; /* Organiza os itens em linha */
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  margin-top: 120px;
  background: rgba(0, 0, 0); /* Fundo escuro */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os itens no mobile */
    padding: 20px;
    height: auto; /* Ajusta altura no mobile */
  }
`;

const TitleWrapper = styled.div`
  flex: 1;
  max-width: 400px;
  text-align: left;

  h1 {
    font-size: 4.5rem;
    margin: 0 0 20px 0;
    color: white;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 3rem; /* Reduz tamanho no mobile */
      text-align: center; /* Centraliza no mobile */
    }
  }

  p {
    font-size: 1.2rem;
    color: white;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 1rem; /* Reduz tamanho no mobile */
      text-align: center; /* Centraliza no mobile */
    }
  }
`;

const SlideWrapper = styled.div`
  flex: 2;
  height: 100%;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      height: auto; /* Ajusta altura no mobile */
    }
  }

  @media (max-width: 768px) {
    width: 100%; /* Ocupa toda a largura no mobile */
    margin-top: 20px; /* Espaçamento entre título e vídeos */
  }
`;

function HeroSection() {
  return (
    <HeroWrapper>
      <TitleWrapper>
        <h1>Quem é você no País do Marketing?</h1>
        <p>
          Descubra agora qual personagem representa sua jornada!
          <span className="arrow"> ➔</span>
        </p>
      </TitleWrapper>
      <SlideWrapper>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 7000, // Tempo entre transições
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          speed={900} // Velocidade da transição
        >
          <SwiperSlide>
            <video autoPlay muted loop>
              <source src={Video1} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted loop>
              <source src={Video2} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted loop>
              <source src={Video3} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay muted loop>
              <source src={Video4} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </SwiperSlide>
        </Swiper>
      </SlideWrapper>
    </HeroWrapper>
  );
}

export default HeroSection;
