import React from 'react';

import './style.scss';

import Icon from '../../UI/Icon';


const languages = [
  { label: 'PT' },
  { label: 'ES' },
  { label: 'US' },
];

const buildLanguages = () => languages.map(l => <p key={l.label} className="language-item">{l.label}</p>);

const LanguageSelect = () => (
  <div className="language-container">
    <div className="language-selected">PT <Icon classes="fa-fw fa-chevron-down" /></div>
    <div className="language-options">
      {buildLanguages()}
    </div>
  </div>
);

export default LanguageSelect;
