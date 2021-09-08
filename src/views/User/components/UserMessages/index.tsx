import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import MessagesList from '../../../../common/MessagesList';
import { IUser } from '../../../../model/user.interface';
import { fetchUserMessages } from '../../../../store/user/actions';
import { getUserMessages } from '../../../../store/user/selectors';
import { UserShape } from '../../types';

interface IProps {
  user: IUser;
}

const UserMessages: React.FC<IProps> = React.memo<IProps>(({ user }) => {
  const dispatch = useDispatch();
  const messages = useSelector(getUserMessages);

  useEffect(() => {
    dispatch(fetchUserMessages(user.id));
  }, [dispatch, user]);

  return <MessagesList messages={messages} />;
});

UserMessages.propTypes = {
  user: UserShape.isRequired,
};

export default UserMessages;
