import React from 'react';
import PropTypes from 'prop-types';

import CenterAll from '../CenterAll';

const Investments = props => (
  <article className={['cf article', props.classes].join(' ')}>
    <CenterAll >
      {props.children}
    </CenterAll>
  </article>
);

Investments.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Investments.defaultProps = {
  classes: '',
};

export default Investments;
