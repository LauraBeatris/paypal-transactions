import React from 'react';

import { TableRow } from './styles';
import { TransactionRowProps as Props } from './types';

const TransactionRow: React.FC<Props> = ({ transaction }) => (
  <TableRow>
    <td>
      <strong className="title">{transaction.title}</strong>
      <span>{transaction.category}</span>
    </td>
    <td>
      <strong className="income">R$ 5.000,00</strong>
      <span>{transaction.created_at}</span>
    </td>
  </TableRow>
);

export default TransactionRow;
