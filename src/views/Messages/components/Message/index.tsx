import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import format from 'date-fns/format';
import React, { FC, memo, useMemo } from 'react';
import NavLink from '../../../../common/NavLink';
import { IMessage } from '../../../../model/message.interface';
import { MessageType } from '../../types';

interface IProps {
  message: IMessage;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const Message: FC<IProps> = memo((props: IProps): JSX.Element => {
  const classes = useStyles();
  const { message, date, user } = props.message;

  const renderUser = useMemo(
    () => <NavLink url={`/users/${user.id}`} label={`${user.firstName} ${user.lastName}`} />,
    [user]
  );

  const renderDate = useMemo(() => format(new Date(date), 'dd.MM.yyyy, HH:mm'), [date]);

  return (
    <Card className={classes.root}>
      <CardHeader title={renderUser} subheader={renderDate} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
});

Message.propTypes = {
  message: MessageType.isRequired,
};

export default Message;
