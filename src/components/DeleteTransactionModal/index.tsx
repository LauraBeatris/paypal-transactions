import React from 'react';
import Modal from 'react-modal';
import useDidMount from '@rooks/use-did-mount';
import { mutate } from 'swr';

import { FaRegCheckCircle } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

import { toast } from 'react-toastify';
import api from '../../services/api';
import Button from '../../styles/components/buttons';
import { Title } from './styles';

interface DeleteTransactionModal {
  modalIsOpen: boolean;
  closeModal: () => void;
  selectedTransactionId: string | null;
}

const DeleteTransactionModal: React.FC<DeleteTransactionModal> = ({
  modalIsOpen,
  closeModal,
  selectedTransactionId,
}) => {
  const deleteTransaction = async (): Promise<void> => {
    try {
      await api.delete(`/transactions/${selectedTransactionId}`);
      mutate('/transactions');
      closeModal();
    } catch (err) {
      toast.error('Ops.. something went wrong. Please, try again.');
    }
  };

  useDidMount(() => {
    const app = document.getElementById('root');

    if (app) {
      Modal.setAppElement(app);
    }
  });

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Transaction Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <Title>Do you want to delete this transaction?</Title>
      <div className="modal-actions">
        <Button theme="confirm" type="button" onClick={deleteTransaction}>
          <FaRegCheckCircle />
          Confirm
        </Button>
        <Button theme="cancel" type="button" onClick={closeModal}>
          <GiCancel />
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteTransactionModal;
