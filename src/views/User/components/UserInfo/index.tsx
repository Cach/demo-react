import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

import UserAvatar from '../../../../common/UserAvatar';
import { IUser } from '../../../../interfaces/user';
import { UserShape } from '../../shapes';

interface IProps {
  user: IUser;
}

const UserInfo: React.FC<IProps> = React.memo(({ user }) => (
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
        {user.fullName}
      </Typography>
    </CardContent>
  </Card>
));

UserInfo.propTypes = {
  user: UserShape.isRequired,
};

export default UserInfo;
