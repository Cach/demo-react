import { Fab, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { FC, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { messageFormOpen } from '../../../../store/messages/actions';
import { RootState } from '../../../../store/types';

const SendMessageButton: FC = memo((): JSX.Element => {
  const dispatch: Dispatch<RootState> = useDispatch<RootState>();

  const handleClickOpen = useCallback(() => {
    dispatch(messageFormOpen());
  }, [dispatch]);

  return (
    <Tooltip title="Send a new message" placement="right">
      <Fab
        size="medium"
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', left: 17, bottom: 45 }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
});

export default SendMessageButton;
