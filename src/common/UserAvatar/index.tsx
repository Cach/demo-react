import { Avatar } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import React, { FC, memo, useMemo } from 'react';
import { IUser } from '../../model/user.interface';
import { UserType } from '../../views/User/types';

interface IProps {
  user: IUser;
  size?: number;
}

const UserAvatar: FC<IProps> = memo<IProps>(({ user, size }): JSX.Element => {
  const labelMemo = useMemo(
    () => [user.firstName, user.lastName].map((item) => item.charAt(0).toUpperCase()).join(''),
    [user]
  );

  return <Avatar sx={{ width: size, height: size, bgcolor: deepOrange[500] }}>{labelMemo}</Avatar>;
});

UserAvatar.propTypes = {
  user: UserType.isRequired,
  size: PropTypes.number,
};

UserAvatar.defaultProps = {
  size: 50,
};

export default UserAvatar;
