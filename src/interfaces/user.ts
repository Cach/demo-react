export interface IUser {
  id: number;
  firstName: string;
  lastName: string;

  get fullName(): string;
  get initials(): string;
}
