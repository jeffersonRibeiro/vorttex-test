import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './style.scss';

import Banner from '../../../UI/Banner';

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

MainBanner.propTypes = {
  banners: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainBanner;
