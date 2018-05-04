import React from 'react';

import Icon from '../Icon';

const languages = [
  { link: '#pt', label: 'PT' },
  { link: '#es', label: 'ES' },
  { link: '#us', label: 'US' },
];

const buildLanguages = () => languages.map(l => <p><a href={l.link}>{l.label}</a></p>);

const languageSelect = () => (
  <div className="language-container">
    <div className="language-selected">PT <Icon classes="fa-chevron-down" /></div>
    <div className="language-options">
      {buildLanguages()}
    </div>
  </div>
);

export default languageSelect;
