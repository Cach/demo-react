import { MOCK_DATA_PATH } from '../config/constants';
import { IMessage } from '../model/message.interface';

export const getMessages = (): Promise<IMessage[]> =>
  fetch(MOCK_DATA_PATH).then((response) => response.json());
