import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

import { Box, Button, FormControl, TextField, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { LoadingButton } from '@material-ui/lab';
import PropTypes from 'prop-types';

import FormButtons from '../../../../common/FormButtons';
import { IMessageForm } from '../../../../model/message.interface';

interface IProps {
  isSending: boolean;
  onSubmit: (data: IMessageForm) => void;
  onCancel: () => void;
}

const MESSAGE_LIMIT = 200;

const MessageForm: React.FC<IProps> = React.memo(({ isSending, onSubmit, onCancel }) => {
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(!!message.length);
  }, [message]);

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();

      onSubmit({ message });
    },
    [onSubmit, message]
  );

  const handleMessageChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;

    if (value.length > MESSAGE_LIMIT) {
      value = value.slice(0, MESSAGE_LIMIT);
    }

    setMessage(value);
  }, []);

  const handleMessageKeyDown = useCallback(() => message.length < MESSAGE_LIMIT, [message]);

  const renderMessageCounter = useMemo<JSX.Element>(
    () => (
      <Typography variant="caption" display="block" gutterBottom align="right">
        {message.length}/{MESSAGE_LIMIT}
      </Typography>
    ),
    [message]
  );

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
      <FormControl fullWidth sx={{ mb: 1 }}>
        <TextField
          id="message-field"
          label="Message"
          multiline
          rows={5}
          value={message}
          sx={{ width: '100%' }}
          disabled={isSending}
          onChange={handleMessageChange}
          onKeyDown={handleMessageKeyDown}
        />

        {renderMessageCounter}
      </FormControl>

      <FormButtons>
        <Button color="error" onClick={onCancel} disabled={isSending} variant="outlined">
          Cancel
        </Button>

        <LoadingButton
          loading={isSending}
          loadingPosition="start"
          startIcon={<SendIcon />}
          onClick={handleFormSubmit}
          variant="outlined"
          disabled={!isValid}
        >
          Send
        </LoadingButton>
      </FormButtons>
    </Box>
  );
});

MessageForm.propTypes = {
  isSending: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default MessageForm;
