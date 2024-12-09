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
  display: flex; /* Configura layout em colunas */
  flex-direction: row; /* Organiza os itens em linha */
  justify-content: space-between;
  align-items: center;
  padding: 0 40px; /* Espaçamento interno nas laterais */
  margin-top: 120px;
  background: rgba(0, 0, 0); /* Fundo escuro semi-transparente */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden; /* Evita conteúdo fora do limite */
`;

const TitleWrapper = styled.div`
  flex: 1; /* Ocupa 1 parte do espaço disponível */
  max-width: 400px; /* Largura máxima da coluna */
  text-align: left; /* Alinha o texto à esquerda */

  h1 {
    font-size: 4.5rem;
    margin: 0 0 20px 0;
    color: white;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    color: white;
    font-weight: 500;
  }
`;

const SlideWrapper = styled.div`
  flex: 2; /* Ocupa 2 partes do espaço disponível */
  height: 100%;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que o vídeo preencha o espaço */
  }
`;

function HeroSection() {
  return (
    <HeroWrapper>
      <TitleWrapper>
        <h1>Quem é você no País do Marketing?</h1>
        <p>Descubra agora qual personagem representa sua jornada!
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
