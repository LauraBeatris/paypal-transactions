import React, { ReactNode } from 'react';

import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';

interface UploadProps {
  onUpload: Function;
}

const Upload: React.FC<UploadProps> = ({ onUpload }: UploadProps) => {
  const renderDragMessage = (
    isDragActive: boolean,
    isDragRejest: boolean,
  ): ReactNode => {
    if (!isDragActive) {
      return <UploadMessage>Select or a drag a file</UploadMessage>;
    }

    if (isDragRejest) {
      return <UploadMessage type="error">File not supported</UploadMessage>;
    }

    return (
      <UploadMessage type="success">
        Drag the file file into the box
      </UploadMessage>
    );
  };

  return (
    <>
      <Dropzone
        accept=".csv, application/vnd.ms-excel, text/csv"
        onDropAccepted={files => onUpload(files)}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }): any => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} data-testid="upload" />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    </>
  );
};

export default Upload;
