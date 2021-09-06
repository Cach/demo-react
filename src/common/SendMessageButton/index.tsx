import React, { FC, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { messageFormOpen } from '../../store/messages/actions';
import { RootState } from '../../store/types';
import SendButton from '../SendButton';

const SendMessageButton: FC = memo((): JSX.Element => {
  const dispatch: Dispatch<RootState> = useDispatch<RootState>();

  const handleClickOpen = useCallback(() => {
    dispatch(messageFormOpen());
  }, [dispatch]);

  return <SendButton label="Send message" handleClick={handleClickOpen} />;
});

export default SendMessageButton;
