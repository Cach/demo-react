import { TextareaAutosize } from '@material-ui/core';
import React, { FC, memo } from 'react';

const MessageForm: FC = memo(() => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextareaAutosize name="message" aria-label="empty textarea" />
    </form>
  );
});

export default MessageForm;
