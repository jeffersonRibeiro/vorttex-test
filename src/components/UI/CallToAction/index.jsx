import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Icon from '../Icon';

const CallToAction = props => (
  <a className="call-to-action-link" href={props.link}>
    {props.text}
    <Icon classes="fa-chevron-right" />
  </a>
);

CallToAction.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
};

CallToAction.defaultProps = {
  text: 'Saiba mais',
};


export default CallToAction;
