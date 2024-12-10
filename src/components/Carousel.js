import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import styled from 'styled-components';

import Partner1 from '../assets/RE7-LOGO-fundo-incolor-10.png';
import Partner2 from '../assets/RE7-LOGO-fundo-incolor-10.png';
import Partner3 from '../assets/RE7-LOGO-fundo-incolor-10.png';
import Partner4 from '../assets/RE7-LOGO-fundo-incolor-10.png';
import Partner5 from '../assets/RE7-LOGO-fundo-incolor-10.png';

// Swiper estilos personalizados
const CarouselWrapper = styled.section`
  
  width: 100%; /* Garante largura total */
  padding: 40px 20;
  background-color: #f5f5f5;

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 150px;
      height: auto;
    }
  }
  /* Fundo escuro semi-transparente */
  background: rgba(255, 228, 196, 0.2);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

function Carousel() {
  return (
    <CarouselWrapper>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1, // Intervalo mínimo
          disableOnInteraction: false,
        }}
        speed={15000} // Aumentada a velocidade para suavizar o movimento
      >
        <SwiperSlide>
          <img src={Partner1} alt="Parceiro 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Partner2} alt="Parceiro 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Partner3} alt="Parceiro 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Partner4} alt="Parceiro 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Partner5} alt="Parceiro 5" />
        </SwiperSlide>
      </Swiper>
    </CarouselWrapper>
  );
}

export default Carousel;
