import { MOCK_MESSAGES_PATH } from '../config/constants';
import { IMessage, IMessageForm } from '../model/message.interface';
import { uniqueId } from '../utils/random';

export const getMessages = (): Promise<IMessage[]> =>
  fetch(MOCK_MESSAGES_PATH).then((response) => response.json());

export const addMessage = (data: IMessageForm): Promise<IMessage> =>
  Promise.resolve({
    id: uniqueId(),
    message: data.message,
    date: new Date().toISOString(),
    user: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
  });

export const getMessagesByUser = (id: number): Promise<IMessage[]> =>
  fetch(MOCK_MESSAGES_PATH)
    .then((response) => response.json())
    .then((messages) => messages.filter((message: IMessage) => message.user.id === id));
