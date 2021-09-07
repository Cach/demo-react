import React, { FC, memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import Loader from '../../common/Loader';
import MessagesList from '../../common/MessagesList';
import PageWrapper from '../../common/PageWrapper';
import { IMessage } from '../../model/message.interface';
import { fetchMessages } from '../../store/messages/actions';
import { getMessages, getMessagesLoading } from '../../store/messages/selectors';
import { RootState } from '../../store/types';
import MessageFormDialog from './components/MessageFormDialog';
import MessagesFilters from './components/MessagesFilters';
import SendMessageButton from './components/SendMessageButton';

const Messages: FC = memo((): JSX.Element => {
  const isLoading = useSelector<RootState, boolean>(getMessagesLoading);
  const messages = useSelector<RootState, IMessage[]>(getMessages);
  const dispatch: Dispatch<RootState> = useDispatch<RootState>();

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
