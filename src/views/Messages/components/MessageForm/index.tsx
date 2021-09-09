import React, { ChangeEvent, useCallback } from 'react';

import { Box, Button, FormControl, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { LoadingButton } from '@material-ui/lab';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import CharacterCounter from '../../../../common/CharacterCounter';
import FormButtons from '../../../../common/FormButtons';
import { IMessageForm } from '../../../../model/message.interface';
import { MESSAGE_LIMIT, ValidationSchema } from './validation';

interface IProps {
  isSending: boolean;
  onSubmit: (data: IMessageForm) => void;
  onCancel: () => void;
}

const MessageForm: React.FC<IProps> = React.memo(({ isSending, onSubmit, onCancel }) => {
  const formik = useFormik<IMessageForm>({
    initialValues: {
      message: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => onSubmit(values),
  });

  const handleMessageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      let { value } = event.target;

      if (value.length > MESSAGE_LIMIT) {
        value = value.slice(0, MESSAGE_LIMIT);
      }

      formik.setFieldValue('message', value);
    },
    [formik]
  );

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete="off"
      sx={{ mt: 1 }}
    >
      <FormControl fullWidth sx={{ mb: 1 }}>
        <TextField
          id="message-field"
          label="Message"
          name="message"
          multiline
          rows={5}
          error={!!formik.errors.message}
          value={formik.values.message}
          sx={{ width: '100%' }}
          disabled={isSending}
          onChange={handleMessageChange}
        />

        <CharacterCounter value={formik.values.message} max={MESSAGE_LIMIT} />
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
