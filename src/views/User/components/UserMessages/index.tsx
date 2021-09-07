import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import MessagesList from '../../../../common/MessagesList';
import { IMessage } from '../../../../model/message.interface';
import { IUser } from '../../../../model/user.interface';
import { RootState } from '../../../../store/types';
import { fetchUserMessages } from '../../../../store/user/actions';
import { getUserMessages } from '../../../../store/user/selectors';
import { UserType } from '../../types';

interface IProps {
  user: IUser;
}

const UserMessages: FC<IProps> = memo<IProps>(({ user }) => {
  const dispatch: Dispatch<RootState> = useDispatch<RootState>();
  const messages = useSelector<RootState, IMessage[]>(getUserMessages);

  useEffect(() => {
    dispatch(fetchUserMessages(user.id));
  }, [dispatch, user]);

  return <MessagesList messages={messages} />;
});

UserMessages.propTypes = {
  user: UserType.isRequired,
};

export default UserMessages;
