import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import FormDialog from '../../../../common/FormDialog';
import { IMessageForm } from '../../../../model/message.interface';
import { messageFormClose, sendFormRequest } from '../../../../store/messages/actions';
import { getFormIsSending, getFormOpen } from '../../../../store/messages/selectors';
import MessageForm from '../MessageForm';

const MessageFormDialog: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getFormOpen);
  const isSending = useSelector(getFormIsSending);

  const handleSubmit = useCallback(
    (data: IMessageForm) => {
      dispatch(sendFormRequest(data));
    },
    [dispatch]
  );

  const handleClose = useCallback(() => {
    if (isSending) {
      return;
    }

    dispatch(messageFormClose());
  }, [dispatch, isSending]);

  return (
    <FormDialog isOpen={isOpen} title="Send message" onClose={handleClose}>
      <MessageForm isSending={isSending} onSubmit={handleSubmit} onCancel={handleClose} />
    </FormDialog>
  );
});

export default MessageFormDialog;
