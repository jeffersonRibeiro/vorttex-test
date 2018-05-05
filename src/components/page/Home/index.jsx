import React from 'react';

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

export default HomePage;
