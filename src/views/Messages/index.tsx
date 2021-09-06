import { Box, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC, memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import Loader from '../../common/Loader';
import { IMessage } from '../../model/message.interface';
import { fetchMessages } from '../../store/messages/actions';
import { getMessages, getMessagesLoading } from '../../store/messages/selectors';
import { RootState } from '../../store/types';
import Message from './components/Message';
import MessageFormDialog from './components/MessageFormDialog';
import MessagesFilters from './components/MessagesFilters';

const useStyles = makeStyles({
  root: {
    padding: '20px 0',
  },
});

const Messages: FC = memo((): JSX.Element => {
  const classes = useStyles();

  const isLoading = useSelector<RootState, boolean>(getMessagesLoading);
  const messages = useSelector<RootState, IMessage[]>(getMessages);
  const dispatch: Dispatch<RootState> = useDispatch<RootState>();

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const renderMessagesList = useMemo(
    () =>
      messages.map((message) => (
        <ListItem key={message.id} sx={{ paddingX: 0 }}>
          <Message message={message} />
        </ListItem>
      )),
    [messages]
  );

  return (
    <Box className={classes.root}>
      <MessagesFilters />
      <List>{renderMessagesList}</List>
      {isLoading && <Loader size={48} />}
      <MessageFormDialog />
    </Box>
  );
});

export default Messages;
