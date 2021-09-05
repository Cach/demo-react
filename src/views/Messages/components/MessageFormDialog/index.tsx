import React, { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import FormDialog from '../../../../common/FormDialog';
import { messageFormClose, sendFormRequest } from '../../../../store/messages/actions';
import { getFormIsSending, getFormOpen } from '../../../../store/messages/selectors';
import { RootState } from '../../../../store/types';
import MessageForm from '../MessageForm';

const MessageFormDialog: FC = memo((): JSX.Element => {
  const dispatch: Dispatch<RootState> = useDispatch<RootState>();
  const isOpen: boolean = useSelector<RootState, boolean>(getFormOpen);
  const isSending: boolean = useSelector<RootState, boolean>(getFormIsSending);

  const handleSubmit = useCallback(() => {
    dispatch(sendFormRequest());
  }, [dispatch]);

  const handleClose = useCallback(() => {
    dispatch(messageFormClose());
  }, [dispatch]);

  return (
    <FormDialog
      isOpen={isOpen}
      isSending={isSending}
      title="Send message"
      handleSubmit={handleSubmit}
      handleClose={handleClose}
    >
      <MessageForm />
    </FormDialog>
  );
});

export default MessageFormDialog;
