import { Card, CardContent, Typography } from '@material-ui/core';
import React, { FC, memo } from 'react';
import UserAvatar from '../../../../common/UserAvatar';
import { IUser } from '../../../../model/user.interface';
import { UserType } from '../../types';

interface IProps {
  user: IUser;
}

const UserInfo: FC<IProps> = memo<IProps>(
  ({ user }): JSX.Element => (
    <Card>
      <CardContent
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <UserAvatar user={user} />

        <Typography gutterBottom variant="h5" component="div" sx={{ m: 0 }}>
          {user.firstName} {user.lastName}
        </Typography>
      </CardContent>
    </Card>
  )
);

UserInfo.propTypes = {
  user: UserType.isRequired,
};

export default UserInfo;
