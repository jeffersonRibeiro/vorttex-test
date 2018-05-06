import React from 'react';

import MainBanner from '../../../containers/HomePage/MainBanner';
import About from './About';
import Investments from './Investments';
import Institute from './Institute';

const HomePage = () => (
  <div>
    <MainBanner />
    <About />
    <Investments />
    <Institute />
  </div>
);

export default HomePage;
