import { IMessage } from '../interfaces/message';
import { IUser } from '../interfaces/user';

export class Message implements IMessage {
  constructor(
    public readonly id: number,
    public readonly date: string,
    public readonly message: string,
    public readonly user: IUser
  ) {}
}
