import React from 'react';
import './style.scss';

import NavigationItems from '../Navigation/NavigationItems';
import Search from './Search';
import LanguageSelect from './LanguageSelect';
import Logo from '../UI/Logo';
import CenterAll from '../UI/CenterAll';

const Header = () => (
  <header className="cf">
    <CenterAll clearfix>
      <Logo classes="pull-left" />
      <div className="pull-right">
        <nav><NavigationItems /></nav>
        <Search />
        <LanguageSelect />
      </div>
    </CenterAll>
  </header>
);

export default Header;
