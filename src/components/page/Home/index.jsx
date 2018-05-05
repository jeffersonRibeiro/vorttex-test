import React from 'react';

import MainBanner from './MainBanner';
import About from './About';
import Investments from './Investments';

const HomePage = props => (
  <div>
    <MainBanner banners={props.banners} />
    <About />
    <Investments />
  </div>
);

export default HomePage;
