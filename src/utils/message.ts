import { IMessage } from '../interfaces/message';
import { Message } from '../model/message';
import { User } from '../model/user';

export const makeMessageObject = ({ user, ...message }: IMessage): IMessage =>
  new Message(
    message.id,
    message.date,
    message.message,
    new User(user.id, user.firstName, user.lastName)
  );
