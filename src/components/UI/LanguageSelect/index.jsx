import React from 'react';

import './style.scss';

import Icon from '../Icon';


const languages = [
  { label: 'PT' },
  { label: 'ES' },
  { label: 'US' },
];

const buildLanguages = () => languages.map(l => <p className="language-item">{l.label}</p>);

const languageSelect = () => (
  <div className="language-container">
    <div className="language-selected">PT <Icon classes="fa-chevron-down" /></div>
    <div className="language-options">
      {buildLanguages()}
    </div>
  </div>
);

export default languageSelect;
