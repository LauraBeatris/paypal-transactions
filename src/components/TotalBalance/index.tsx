import React from 'react';
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory';

import { Container } from './styles';

const mockData = [
  { quarter: 1, balance: 13000 },
  { quarter: 2, balance: 16500 },
  { quarter: 3, balance: 14250 },
];

interface BalanceProps {
  totalBalance: string;
}

const TotalBalance: React.FC<BalanceProps> = ({ totalBalance }) => {
  // const [balanceSymbol, balanceValue] = totalBalance.split(' ');

  return (
    <Container>
      <div>
        <h4>PayPal Balance</h4>
        <h3>
          {/* <span className="symbol">{balanceSymbol}</span> */}
          <span className="balance-total" data-testid="balance-total">
            {totalBalance}
          </span>
        </h3>
      </div>

      <VictoryChart domainPadding={20}>
        <VictoryAxis
          tickValues={[1, 2, 3]}
          tickFormat={['Mon', 'Tue', 'Wed']}
        />
        <VictoryBar data={mockData} x="quarter" y="balance" />
      </VictoryChart>
    </Container>
  );
};

export default TotalBalance;
