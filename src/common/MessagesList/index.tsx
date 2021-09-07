import { List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { FC, memo, useMemo } from 'react';
import { IMessage } from '../../model/message.interface';
import Message from '../../views/Messages/components/Message';
import { MessageType } from '../../views/Messages/types';

interface IProps {
  messages: IMessage[];
}

const MessagesList: FC<IProps> = memo<IProps>(({ messages }): JSX.Element => {
  const renderMessagesList = useMemo(
    () =>
      messages.map((message) => (
        <ListItem key={message.id} sx={{ paddingX: 0 }}>
          <Message message={message} />
        </ListItem>
      )),
    [messages]
  );

  return <List>{renderMessagesList}</List>;
});

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(MessageType.isRequired).isRequired,
};

export default MessagesList;
