import React from 'react';
import PropTypes from 'prop-types';

const Copyright = props => (
  <p className={['copyright', props.classes].join(' ')}>@ Logo 2018 VORTTEX CO</p>
);

Copyright.propTypes = {
  classes: PropTypes.string,
};

Copyright.defaultProps = {
  classes: '',
};

export default Copyright;
