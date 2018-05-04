import React from 'react';

import './style.scss';

import NavigationItems from '../Navigation/NavigationItems';
import Search from './Search';
import LanguageSelect from './LanguageSelect';
import Clearfix from '../UI/Clearfix';
import Logo from '../UI/Logo';

const Header = () => (
  <header>
    <Logo />
    <LanguageSelect />
    <Search />
    <nav><NavigationItems /></nav>
    <Clearfix />
  </header>
);

export default Header;
