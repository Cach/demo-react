import React from 'react';

import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import NavLink from '../../../../common/NavLink';
import { IMessage } from '../../../../model/message.interface';
import { formatStringDate } from '../../../../utils/date';
import { MessageShape } from '../../types';

interface IProps {
  message: IMessage;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const Message: React.FC<IProps> = React.memo((props) => {
  const classes = useStyles();
  const { message, date, user } = props.message;

  const renderUser = (
    <NavLink url={`/users/${user.id}`} label={`${user.firstName} ${user.lastName}`} />
  );

  return (
    <Card className={classes.root}>
      <CardHeader title={renderUser} subheader={formatStringDate(date)} />
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
