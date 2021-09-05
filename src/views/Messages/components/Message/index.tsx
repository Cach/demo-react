import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { FC, memo } from 'react';
import { IMessage } from '../../../../model/message.interface';

interface IProps {
  message: IMessage;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const Message: FC<IProps> = memo(({ message }: IProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Username" subheader={message.date} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message.message}
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
  }).isRequired,
};

export default Message;
