// CountrySlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const countries = [
  {
    name: 'United Kingdom',
    image: 'https://flagcdn.com/w320/gb.png',
  },
  {
    name: 'United Arab Emirates',
    image: 'https://flagcdn.com/w320/ae.png',
  },
  {
    name: 'Switzerland',
    image: 'https://flagcdn.com/w320/ch.png',
  },
  {
    name: 'Germany',
    image: 'https://flagcdn.com/w320/de.png',
  },
];

const CountrySlider = () => {
  return (
    <div className="country-slider-wrapper">
      <h2 className="slider-title">Our Global Presence</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {countries.map((country, index) => (
          <SwiperSlide key={index}>
            <div className="country-card">
              <img src={country.image} alt={country.name} />
              <h4>{country.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CountrySlider;
