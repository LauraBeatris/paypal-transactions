import React, { useMemo } from 'react';

import { TableRow } from './styles';
import { TransactionRowProps as Props } from '../../types/transactions';

const TransactionRow: React.FC<Props> = ({ transaction, onClick }) => {
  const transactionValue = useMemo(() => {
    let value = transaction.formattedValue;

    if (transaction.type === 'outcome') {
      value = `- ${value}`;
    }

    return value;
  }, [transaction.type, transaction.formattedValue]);

  return (
    <TableRow onClick={onClick}>
      <td>
        <strong className="title">{transaction.title}</strong>
        <span>{transaction.category.title}</span>
      </td>
      <td>
        <strong className={transaction.type}>{transactionValue}</strong>
        <span>{transaction.formattedDate}</span>
      </td>
    </TableRow>
  );
};

export default TransactionRow;
