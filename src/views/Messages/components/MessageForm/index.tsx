import { Box, Button, FormControl, TextField, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { LoadingButton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import FormButtons from '../../../../common/FormButtons';
import { IMessageForm } from '../../../../model/message.interface';

interface IProps {
  isSending: boolean;
  handleSubmit: (data: IMessageForm) => void;
  handleCancel: () => void;
}

const MESSAGE_LIMIT = 200;

const MessageForm: FC<IProps> = memo<IProps>(
  ({ isSending, handleSubmit, handleCancel }): JSX.Element => {
    const [message, setMessage] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
      setIsValid(!!message.length);
    }, [message]);

    const handleFormSubmit = useCallback(
      (event) => {
        event.preventDefault();

        handleSubmit({ message });
      },
      [handleSubmit, message]
    );

    const handleMessageChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      let { value } = event.target;

      if (value.length > MESSAGE_LIMIT) {
        value = value.slice(0, MESSAGE_LIMIT);
      }

      setMessage(value);
    }, []);

    const handleMessageKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
      const { value } = event.target as HTMLInputElement;

      return value.length < MESSAGE_LIMIT;
    }, []);

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
          <Button color="error" onClick={handleCancel} disabled={isSending} variant="outlined">
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
  }
);

MessageForm.propTypes = {
  isSending: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default MessageForm;
