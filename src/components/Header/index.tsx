import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <ul>
          <li>
            <Link to="/summary">Summary</Link>
          </li>
          <li>
            <Link to="/activies">Activies</Link>
          </li>
          <li>
            <Link to="/payments">Payments</Link>
          </li>
          <li>
            <Link to="/wallet">Wallet</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
    </header>
  </Container>
);

export default Header;
