import React from 'react';
import useSWR from 'swr';
import useDidMount from '@rooks/use-did-mount';
import { useLocation, Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import { FiUpload } from 'react-icons/fi';
import { AxiosResponse } from 'axios';

import income from '../../assets/icons/income.svg';
import outcome from '../../assets/icons/outcome.svg';

import Header from '../../components/Header';
import BalanceTotal from '../../components/TotalBalance';
import TransactionsTable from '../../components/TransactionsTable';
import Loading from '../../components/Loading';

import formatTransactions from '../../helpers/formatTransactions';
import formatBalance from '../../helpers/formatBalance';
import api from '../../services/api';
import { Transaction, Balance } from '../../types/transactions';

import Button from '../../styles/components/buttons';
import { Container, CardContainer, Card, Title } from './styles';

interface TransactionsResponse {
  transactions: Transaction[];
  balance: Balance;
}
interface LocationState {
  newTransactions?: boolean;
}

const Dashboard: React.FC = () => {
  const { data: responseData, error } = useSWR<
    AxiosResponse<TransactionsResponse>
  >('/transactions', api);
  const location = useLocation<LocationState>();

  useDidMount(() => {
    if (location.state?.newTransactions) {
      scroll.scrollToBottom();
    }
  });

  if (error) {
    return <div>Ops... It seems that something went wrong</div>;
  }

  if (!responseData) {
    return <Loading />;
  }

  const formattedTransactions = formatTransactions(
    responseData?.data.transactions,
  );

  const formattedExpense = formatBalance(responseData?.data.balance);

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
        <BalanceTotal totalBalance={formattedExpense.formattedTotal} />
        <Link to="/import" data-testid="import-dashboard-link">
          <Button theme="dark">
            <FiUpload color="#fff" />
            Import CSV with Transactions Data
          </Button>
        </Link>
        <CardContainer>
          <Card>
            <header>
              <p>Incomes</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">
              {formattedExpense.formattedIncome}
            </h1>
          </Card>
          <Card>
            <header>
              <p>Outcomes</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">
              {formattedExpense.formattedOutcome}
            </h1>
          </Card>
        </CardContainer>
        {responseData && (
          <TransactionsTable transactions={formattedTransactions} />
        )}
      </Container>
    </>
  );
};

export default Dashboard;
