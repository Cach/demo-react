import { MOCK_DATA_PATH } from '../config/constants';
import { IMessage, IMessageForm } from '../model/message.interface';
import { randomInt } from '../utils/random';

export const getMessages = (): Promise<IMessage[]> =>
  fetch(MOCK_DATA_PATH).then((response) => response.json());

export const addMessage = (data: IMessageForm): Promise<IMessage> =>
  Promise.resolve({
    id: randomInt(1e5, 9e5),
    message: data.message,
    date: new Date().toString(),
  });
