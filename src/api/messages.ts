import { MOCK_MESSAGES_PATH } from '../config/constants';
import { IMessage, IMessageForm } from '../model/message.interface';
import { randomInt } from '../utils/random';

export const getMessages = (): Promise<IMessage[]> =>
  fetch(MOCK_MESSAGES_PATH).then((response) => response.json());

export const addMessage = (data: IMessageForm): Promise<IMessage> =>
  Promise.resolve({
    id: randomInt(1e5, 9e5),
    message: data.message,
    date: new Date().toString(),
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
