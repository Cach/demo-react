import React, { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import FormDialog from '../../../../common/FormDialog';
import { IMessageForm } from '../../../../model/message.interface';
import { messageFormClose, sendFormRequest } from '../../../../store/messages/actions';
import { getFormIsSending, getFormOpen } from '../../../../store/messages/selectors';
import { RootState } from '../../../../store/types';
import MessageForm from '../MessageForm';

const MessageFormDialog: FC = memo((): JSX.Element => {
  const dispatch: Dispatch<RootState> = useDispatch<RootState>();
  const isOpen: boolean = useSelector<RootState, boolean>(getFormOpen);
  const isSending: boolean = useSelector<RootState, boolean>(getFormIsSending);

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
    <FormDialog isOpen={isOpen} title="Send message" handleClose={handleClose}>
      <MessageForm isSending={isSending} handleSubmit={handleSubmit} handleCancel={handleClose} />
    </FormDialog>
  );
});

export default MessageFormDialog;
