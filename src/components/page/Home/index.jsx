import React from 'react';

import MainBanner from './MainBanner';
import About from './About';

const HomePage = props => (
  <div>
    <MainBanner banners={props.banners} />
    <About />
  </div>
);

export default HomePage;
