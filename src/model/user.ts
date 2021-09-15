import { IUser } from '../interfaces/user';

export class User implements IUser {
  constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly lastName: string
  ) {}

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public get initials(): string {
    return [this.firstName, this.lastName].map((item) => item.charAt(0).toUpperCase()).join('');
  }
}
