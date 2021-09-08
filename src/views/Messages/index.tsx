import React, { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../common/Loader';
import MessagesList from '../../common/MessagesList';
import PageWrapper from '../../common/PageWrapper';
import { fetchMessages } from '../../store/messages/actions';
import { getMessages, getMessagesLoading } from '../../store/messages/selectors';
import MessageFormDialog from './components/MessageFormDialog';
import MessagesFilters from './components/MessagesFilters';
import SendMessageButton from './components/SendMessageButton';

const Messages: React.FC = React.memo(() => {
  const isLoading = useSelector(getMessagesLoading);
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const renderContent = useMemo(() => {
    if (isLoading) {
      return <Loader size={48} />;
    }

    return (
      <>
        <MessagesFilters />
        <MessagesList messages={messages} />
        <MessageFormDialog />

        <SendMessageButton />
      </>
    );
  }, [isLoading, messages]);

  return <PageWrapper>{renderContent}</PageWrapper>;
});

export default Messages;
