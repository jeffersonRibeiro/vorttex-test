import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


const CenterAll = props => (
  <div className={['center-all', props.clearfix ? 'cf' : null].join(' ')}>{props.children}</div>
);

CenterAll.propTypes = {
  clearfix: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

CenterAll.defaultProps = {
  clearfix: false,
};

export default CenterAll;
