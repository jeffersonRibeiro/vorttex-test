import React from 'react';

import MainBanner from '../../../containers/HomePage/MainBanner';
import About from './About';
import Investments from './Investments';
import Institute from './Institute';

const HomePage = () => (
  <React.Fragment>
    <MainBanner />
    <About />
    <Investments />
    <Institute />
  </React.Fragment>
);

export default HomePage;
