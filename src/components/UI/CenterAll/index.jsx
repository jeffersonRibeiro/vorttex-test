import React from 'react';

import './style.scss';

const CenterAll = props => (
  <div className={['center-all', props.clearfix ? 'cf' : null].join(' ')}>{props.children}</div>
);

export default CenterAll;
