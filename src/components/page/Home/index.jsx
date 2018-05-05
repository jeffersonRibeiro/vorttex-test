import React from 'react';

import MainBanner from './MainBanner';

const HomePage = props => (
  <div>
    <MainBanner banners={props.banners} />
  </div>
);

export default HomePage;
