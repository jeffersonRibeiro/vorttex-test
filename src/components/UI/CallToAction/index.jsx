import React from 'react';

import Icon from '../Icon';

import './style.scss';

const CallToAction = props => (
  <a className="call-to-action-link" href={props.link}>{props.text || 'Saiba mais'}<Icon classes="fa-chevron-right" /></a>
);

export default CallToAction;
