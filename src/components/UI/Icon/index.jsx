import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (
  <i className={['fa', props.classes].join(' ')} />
);

Icon.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default Icon;
