import React from 'react';

import './style.scss';

import NavigationItems from '../Navigation/NavigationItems';
import Logo from '../UI/Logo';
import CenterAll from '../UI/CenterAll';
import Copyright from './Copyright';
import Address from './Address';

const Footer = () => (
  <footer>
    <CenterAll>
      <div className="cf additional-info">
        <Logo classes="pull-left" />
        <Address classes="pull-right"/>
      </div>
      <div className="cf signature">
        <Copyright classes="pull-left" />
        <nav className="pull-right"><NavigationItems /></nav>
      </div>
    </CenterAll>
  </footer>
);

export default Footer;
