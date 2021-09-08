import { Fab, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { messageFormOpen } from '../../../../store/messages/actions';

const SendMessageButton: React.FC = React.memo(() => {
  const dispatch = useDispatch();

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
