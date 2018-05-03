import React from 'react';
import PropTypes from 'prop-types';

const NavigationItem = props => (
  <li>
    <a href={props.link} className={props.active ? 'active' : null}> {props.children} </a>
  </li>
);

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.string,
  children: PropTypes.string.isRequired,
};

NavigationItem.defaultProps = {
  active: '',
};

export default NavigationItem;
