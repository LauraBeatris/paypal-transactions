import React, { useState } from 'react';
import { RiAlertLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';
import Button from '../../styles/components/buttons';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  async function handleUpload(): Promise<void> {
    const data = new FormData();

    if (uploadedFiles.length > 0) {
      data.append('file', uploadedFiles[0].file);

      try {
        await api.post('/transactions/import', data);
        history.push('/', {
          newTransactions: true,
        });
        toast.success('Successfuly imported transactions');
      } catch (err) {
        toast.error(
          'Ops.. something went wrong while importing your transactions. Please, try again.',
        );
      }
    }
  }

  function submitFile(files: File[]): void {
    const newUploadedFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));

    setUploadedFiles([...uploadedFiles, ...newUploadedFiles]);
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Import a Transaction</Title>
        <ImportFileContainer onSubmit={handleUpload}>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <RiAlertLine />
              Only CSV files are allowed
            </p>
            <Button
              data-testid="send-file-button"
              onClick={handleUpload}
              type="button"
              theme="button"
            >
              Import
            </Button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
