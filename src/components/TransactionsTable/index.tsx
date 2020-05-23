import React from 'react';

import TransactionRow from './TransactionsRow';
import { TableContainer } from './styles';
import { TransactionsTableProps as Props } from '../../types/transactions';

const TransactionsTable: React.FC<Props> = ({ transactions }) => {
  return (
    <TableContainer>
      <header>
        <p>Recent activity</p>

        <p>All activity</p>
      </header>
      <table>
        <tbody>
          {transactions.map(transaction => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default TransactionsTable;
