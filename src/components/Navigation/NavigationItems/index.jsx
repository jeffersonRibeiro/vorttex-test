import React from 'react';
import './style.scss';

import NavigationItem from './NavigationItem/';

const navigationItems = () => (
  <ul className="navigation-items">
    <NavigationItem link="/#QuemSomos">QUEM SOMOS</NavigationItem>
    <NavigationItem link="/#NossosInvestimentos">NOSSOS INVESTIMENTOS</NavigationItem>
    <NavigationItem link="/#Instituo">INSTITUTO</NavigationItem>
    <NavigationItem link="/#Contato">CONTATO</NavigationItem>
  </ul>
);

export default navigationItems;
