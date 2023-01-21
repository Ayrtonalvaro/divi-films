import React from 'react';
import CardCarrousel from './CardCarrousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

const Carrousel = ({ movies }) => {
  return (
    <div>
      <Swiper
        className="h-full "
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={10}
        slidesPerView={6}
        navigation   
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <CardCarrousel key={movie.id} movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrousel;
