import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import React, { FC, memo, useMemo } from 'react';
import { IMessage } from '../../../../model/message.interface';

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

  const renderUser = useMemo(() => `${user.firstName} ${user.lastName}`, [user]);

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
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Message;
