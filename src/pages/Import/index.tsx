import React, { useState } from 'react';
import { RiAlertLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';
import Button from '../../styles/components/buttons';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
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
    // const data = new FormData();

    // TODO

    try {
      // await api.post('/transactions/import', data);
    } catch (err) {
      // console.log(err.response.error);
    }
  }

  function submitFile(files: File[]): void {
    // TODO
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Import a Transaction</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <RiAlertLine />
              Only CSV files are allowed
            </p>
            <Button onClick={handleUpload} type="button" theme="button">
              Send
            </Button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
