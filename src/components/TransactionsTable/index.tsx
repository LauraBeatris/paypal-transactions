import React, { useState } from 'react';

import DeleteTransactionModal from '../DeleteTransactionModal';
import TransactionRow from './TransactionsRow';
import { TableContainer } from './styles';
import { TransactionsTableProps as Props } from '../../types/transactions';

const TransactionsTable: React.FC<Props> = ({ transactions }) => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState<
    string | null
  >(null);
  const closeModal = (): void => {
    setModalOpen(false);
  };

  const openModal = (transactionId: string) => () => {
    setSelectedTransactionId(transactionId);
    setModalOpen(true);
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
                onClick={openModal(transaction.id)}
              />
            ))}
          </tbody>
        </table>
      </TableContainer>
      <DeleteTransactionModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedTransactionId={selectedTransactionId}
      />
    </>
  );
};

export default TransactionsTable;
