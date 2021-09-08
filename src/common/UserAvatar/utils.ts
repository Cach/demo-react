import { IUser } from '../../model/user.interface';

export const makeAvatarLabel = (user: IUser): string =>
  [user.firstName, user.lastName].map((item) => item.charAt(0).toUpperCase()).join('');
