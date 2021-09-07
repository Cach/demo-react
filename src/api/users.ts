import { MOCK_USERS_PATH } from '../config/constants';
import { IUser } from '../model/user.interface';

export const getUser = (id: number): Promise<IUser> =>
  fetch(MOCK_USERS_PATH)
    .then((response) => response.json())
    .then((users: IUser[]) => {
      const user = users.find(({ id: userId }) => userId === id);

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    });
