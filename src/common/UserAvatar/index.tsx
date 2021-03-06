import React from 'react';

import { Avatar } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

import { IUser } from '../../interfaces/user';
import { UserShape } from '../../views/User/shapes';

interface IProps {
  user: IUser;
  size?: number;
}

const UserAvatar: React.FC<IProps> = React.memo(({ user, size }) => (
  <Avatar sx={{ width: size, height: size, bgcolor: deepOrange[500] }}>{user.initials}</Avatar>
));

UserAvatar.propTypes = {
  user: UserShape.isRequired,
  size: PropTypes.number,
};

UserAvatar.defaultProps = {
  size: 50,
};

export default UserAvatar;
