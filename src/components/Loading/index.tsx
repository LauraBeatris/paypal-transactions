import React from 'react';

import { Container } from './styles';
import logo from '../../assets/icons/logo.svg';

const Loading: React.FC = (): JSX.Element => (
  <Container>
    <img src={logo} alt="Paypal" aria-label="Paypal" title="Paypal" />
  </Container>
);

export default Loading;
