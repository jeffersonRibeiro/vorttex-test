import React from 'react';

import CenterAll from '../../../UI/CenterAll';

// import './style.scss';

const Investments = props => (
  <article className={["cf article", props.classes].join(' ')}>
    <CenterAll >
      {props.children}
    </CenterAll>
  </article>
);

export default Investments;
