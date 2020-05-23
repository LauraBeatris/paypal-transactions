import React from 'react';
import Modal from 'react-modal';
import useDidMount from '@rooks/use-did-mount';

import { FaRegCheckCircle } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import Button from '../../styles/components/buttons';

import { Title } from './styles';

interface DeleteTransactionModal {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const DeleteTransactionModal: React.FC<DeleteTransactionModal> = ({
  modalIsOpen,
  closeModal,
}) => {
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
        <Button theme="confirm">
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
