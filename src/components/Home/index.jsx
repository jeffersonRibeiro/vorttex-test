import React from 'react';
import Slider from 'react-slick';

import Banner from '../UI/Banner';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <Banner bg="img.png" title="Título aqui" subtitle="Lorem ipsum dolor bla bla bla" link="#link1" />
        <Banner bg="img.png" title="Título aqui 2" subtitle="Lorem ipsum dolor bla bla bla" link="#link2 " />
        <Banner bg="img.png" title="Título aqui 3" subtitle="Lorem ipsum dolor bla bla bla" link="#link3" />
      </Slider>
    </div>
  );
};

export default HomePage;
