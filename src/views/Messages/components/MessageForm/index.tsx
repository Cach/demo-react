import React, { ChangeEvent, useCallback } from 'react';

import { Box, Button, FormControl, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { LoadingButton } from '@material-ui/lab';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import CharacterCounter from '../../../../common/CharacterCounter';
import FormButtons from '../../../../common/FormButtons';
import { IMessageForm } from '../../../../interfaces/message';
import { MESSAGE_LIMIT, ValidationSchema } from './validation';

interface IProps {
  isSending: boolean;
  onSubmit: (data: IMessageForm) => void;
  onCancel: () => void;
}

const MessageForm: React.FC<IProps> = React.memo(({ isSending, onSubmit, onCancel }) => {
  const { values, setFieldValue, errors, handleSubmit } = useFormik<IMessageForm>({
    initialValues: {
      message: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (formData) => onSubmit(formData),
  });

  const handleMessageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      let { value } = event.target;

      if (value.length > MESSAGE_LIMIT) {
        value = value.slice(0, MESSAGE_LIMIT);
      }

      setFieldValue('message', value);
    },
    [setFieldValue]
  );

  return (
    <Box onSubmit={handleSubmit} component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
      <FormControl fullWidth sx={{ mb: 1 }}>
        <TextField
          id="message-field"
          label="Message"
          name="message"
          multiline
          rows={5}
          error={!!errors.message}
          value={values.message}
          sx={{ width: '100%' }}
          disabled={isSending}
          onChange={handleMessageChange}
        />

        <CharacterCounter currentLength={values.message.length} maxLength={MESSAGE_LIMIT} />
      </FormControl>

      <FormButtons>
        <Button color="error" onClick={onCancel} disabled={isSending} variant="outlined">
          Cancel
        </Button>

        <LoadingButton
          type="submit"
          loading={isSending}
          loadingPosition="start"
          startIcon={<SendIcon />}
          variant="outlined"
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
