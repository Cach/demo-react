import { IUser } from './user.interface';

export interface IMessage {
  id: number;
  message: string;
  date: string;
  user: IUser;
}

export interface IMessageForm {
  message: string;
}
