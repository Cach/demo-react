import { useSelector } from 'react-redux';

import { IUser } from '../../interfaces/user';
import { getUser, getUserError, getUserLoading } from '../../store/user/selectors';

export const useViewedUser = (): [
  IUser | null,
  {
    isLoading: boolean;
    error: Error | null;
  }
] => {
  const isLoading = useSelector(getUserLoading);
  const user = useSelector(getUser);
  const error = useSelector(getUserError);

  return [
    user,
    {
      isLoading,
      error,
    },
  ];
};
