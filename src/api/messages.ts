import { MOCK_MESSAGES_PATH } from '../config/constants';
import { IMessage, IMessageForm } from '../interfaces/message';
import { Message } from '../model/message';
import { User } from '../model/user';
import { makeMessageObject } from '../utils/message';
import { uniqueId } from '../utils/uniqueId';

export const getMessages = (): Promise<IMessage[]> =>
  fetch(MOCK_MESSAGES_PATH)
    .then((response) => response.json())
    .then((messages) => messages.map((message: IMessage) => makeMessageObject(message)));

export const addMessage = (data: IMessageForm): Promise<IMessage> => {
  const message = new Message(
    uniqueId(),
    data.message,
    new Date().toISOString(),
    new User(1, 'John', 'Doe')
  );

  return Promise.resolve(message);
};

export const getMessagesByUser = (id: number): Promise<IMessage[]> =>
  fetch(MOCK_MESSAGES_PATH)
    .then((response) => response.json())
    .then((messages) => messages.filter((message: IMessage) => message.user.id === id))
    .then((messages) => messages.map((message: IMessage) => makeMessageObject(message)));
