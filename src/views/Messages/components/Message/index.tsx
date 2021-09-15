import React from 'react';

import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

import NavLink from '../../../../common/NavLink';
import { IMessage } from '../../../../interfaces/message';
import { formatDate } from '../../../../utils/date';
import { MessageShape } from '../../shapes';

interface IProps {
  message: IMessage;
}

const Message: React.FC<IProps> = React.memo((props) => {
  const { message, date, user } = props.message;

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        title={<NavLink url={`/users/${user.id}`} label={user.fullName} />}
        subheader={formatDate(date)}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
});

Message.propTypes = {
  message: MessageShape.isRequired,
};

export default Message;
