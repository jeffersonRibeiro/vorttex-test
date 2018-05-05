import React from 'react';

import './style.scss';

const Logo = props => (
  <a className={['logo', props.classes].join(' ')} href="#/">LOGO</a>
);

export default Logo;
