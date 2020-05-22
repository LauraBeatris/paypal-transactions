import React, { useState, useEffect } from 'react';
import { FiUpload } from 'react-icons/fi';
import { formatRelative } from 'date-fns';

import income from '../../assets/icons/income.svg';
import outcome from '../../assets/icons/outcome.svg';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Button from '../../styles/components/buttons';
import TransactionsTable from '../../components/TransactionsTable';

import formatValue from '../../utils/formatValue';
import api from '../../services/api';

import { Container, CardContainer, Card, Title } from './styles';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  // const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      // TODO
    }

    loadTransactions();
  }, []);

  const transactions = [
    {
      id: '1',
      title: 'Spotify',
      type: 'Entertainment',
      income: 900,
      outcome: 234,
      category: 'Entertainment',
      created_at: formatRelative(new Date(), new Date()),
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <Title>
          Welcome
{' '}
          <span role="img" aria-label="Clap hand">
            👋🏻
          </span>
        </Title>
        <Balance balance={{ total: 32432 }} />
        <Button theme="dark">
          <FiUpload color="#fff" />
          Import
        </Button>
        <CardContainer>
          <Card>
            <header>
              <p>Incomes</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">R$ 5.000,00</h1>
          </Card>
          <Card>
            <header>
              <p>Outcomes</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">R$ 1.000,00</h1>
          </Card>
        </CardContainer>

        <TransactionsTable transactions={transactions} />
      </Container>
    </>
  );
};

export default Dashboard;
