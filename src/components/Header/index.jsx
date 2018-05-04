import React from 'react';

import './style.scss';

import NavigationItems from '../Navigation/NavigationItems';
import Search from '../UI/Search';
import LanguageSelect from '../UI/LanguageSelect';
import Clearfix from '../UI/Clearfix';

const header = () => (
  <header className="row">
    <a className="logo" href="#/">Logo</a>
    <nav><NavigationItems /></nav>
    <Search />
    <LanguageSelect />
    <Clearfix />
  </header>
);

export default header;
