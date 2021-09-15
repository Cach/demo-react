import { IUser } from './user';

export interface IMessage {
  id: number;
  message: string;
  date: string;
  user: IUser;
}

export interface IMessageForm {
  message: string;
}

export interface IMessageFiltersForm {
  date: Date | null;
  user: string;
}
