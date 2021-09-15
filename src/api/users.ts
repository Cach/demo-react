import { MOCK_USERS_PATH } from '../config/constants';
import { NotFoundError } from '../errors/not-found';
import { IUser } from '../interfaces/user';
import { User } from '../model/user';

export const getUser = (id: number): Promise<IUser> =>
  fetch(MOCK_USERS_PATH)
    .then((response) => response.json())
    .then((users: IUser[]) => {
      const user = users.find(({ id: userId }) => userId === id);

      if (!user) {
        throw new NotFoundError('User not found');
      }

      return new User(user.id, user.firstName, user.lastName);
    });
