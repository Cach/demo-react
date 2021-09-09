import { useSelector } from 'react-redux';

import { IMessage } from '../../model/message.interface';
import { getMessages, getMessagesLoading } from '../../store/messages/selectors';

export const useMessages = (): [messages: IMessage[], isLoading: boolean] => {
  const isLoading = useSelector(getMessagesLoading);
  const messages = useSelector(getMessages);

  return [messages, isLoading];
};
