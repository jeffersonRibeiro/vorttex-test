import React from 'react';
import Slider from 'react-slick';

import Banner from '../../../UI/Banner';

import './style.scss';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MainBanner = (props) => {
  const bannerList = props.banners.map(b => <Banner key={b.url} bg={b.url} title={b.title} subtitle={b.subtitle} link={b.link} />);

  return (
    <Slider {...settings}>
      {bannerList}
    </Slider>
  );
};

export default MainBanner;
