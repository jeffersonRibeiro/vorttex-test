import React from 'react';

import './style.scss';

import NavigationItems from '../Navigation/NavigationItems';
import Search from './Search';
import LanguageSelect from './LanguageSelect';
import Clearfix from '../UI/Clearfix';
import Logo from '../UI/Logo';
import CenterAll from '../UI/CenterAll';

const Header = () => (
  <header className="cf">
    <CenterAll clearfix>
      <Logo />
      <LanguageSelect />
      <Search />
      <nav><NavigationItems /></nav>
    </CenterAll>
  </header>
);

export default Header;
