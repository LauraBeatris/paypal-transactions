import React, { useState } from 'react';

import DeleteTransactionModal from '../DeleteTransactionModal';
import TransactionRow from './TransactionsRow';
import { TableContainer } from './styles';
import { TransactionsTableProps as Props } from '../../types/transactions';

const TransactionsTable: React.FC<Props> = ({ transactions }) => {
  const [modalIsOpen, setModalOpen] = useState(false);

  const handleModal = (isOpen: boolean) => (): void => {
    setModalOpen(isOpen);
  };

  return (
    <>
      <TableContainer>
        <header>
          <p>Recent activity</p>

          <p>All activity</p>
        </header>
        <table>
          <tbody>
            {transactions.map(transaction => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                onClick={handleModal(true)}
              />
            ))}
          </tbody>
        </table>
      </TableContainer>
      <DeleteTransactionModal
        modalIsOpen={modalIsOpen}
        closeModal={handleModal(false)}
      />
    </>
  );
};

export default TransactionsTable;
