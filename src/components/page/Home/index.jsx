import React from 'react';
import PropTypes from 'prop-types';

import MainBanner from './MainBanner';
import About from './About';
import Investments from './Investments';
import Institute from './Institute';

const HomePage = props => (
  <div>
    <MainBanner banners={props.banners} />
    <About />
    <Investments />
    <Institute />
  </div>
);

HomePage.propTypes = {
  banners: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePage;
