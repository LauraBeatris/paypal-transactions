import React from 'react';

import { TableRow } from './styles';
import { TransactionRowProps as Props } from '../../types/transactions';

const TransactionRow: React.FC<Props> = ({ transaction }) => {
  return (
    <TableRow>
      <td>
        <strong className="title">{transaction.title}</strong>
        <span>{transaction.category.name}</span>
      </td>
      <td>
        <strong className={transaction.type}>
          {transaction.formattedValue}
        </strong>
        <span>{transaction.formattedDate}</span>
      </td>
    </TableRow>
  );
};

export default TransactionRow;
