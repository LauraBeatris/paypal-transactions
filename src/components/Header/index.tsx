import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/icons/logo.svg';

const Header: React.FC = () => (
  <Container>
    <header>
      <Link to="/">
        <img src={Logo} alt="GoFinances" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Summary</Link>
          </li>
          <li>
            <Link to="/import">Import</Link>
          </li>
          <li className="not-allowed">Activies</li>
          <li className="not-allowed">Payments</li>
          <li className="not-allowed">Wallet</li>
          <li className="not-allowed">Help</li>
        </ul>
      </nav>
    </header>
  </Container>
);

export default Header;
