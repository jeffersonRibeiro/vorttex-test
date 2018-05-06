import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Logo = props => (
  <a className={['logo', props.classes].join(' ')} href="#/">LOGO</a>
);

Logo.propTypes = {
  classes: PropTypes.string,
};

Logo.defaultProps = {
  classes: '',
};

export default Logo;
