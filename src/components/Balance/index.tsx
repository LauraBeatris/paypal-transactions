import React from 'react';
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory';

import { Container } from './styles';

const data = [
  { quarter: 1, balance: 13000 },
  { quarter: 2, balance: 16500 },
  { quarter: 3, balance: 14250 },
];

interface BalanceProps {
  balance: {
    total: number;
  };
}

const Balance: React.FC<BalanceProps> = ({ balance }) => {
  return (
    <Container>
      <div>
        <h4>PayPal Balance</h4>
        <h3>
          <span className="symbol">$</span>
          <span className="money">1,354</span>
        </h3>
      </div>

      <VictoryChart domainPadding={20}>
        <VictoryAxis
          tickValues={[1, 2, 3]}
          tickFormat={['Mon', 'Tue', 'Wed']}
        />
        <VictoryBar data={data} x="quarter" y="balance" />
      </VictoryChart>
    </Container>
  );
};

export default Balance;
