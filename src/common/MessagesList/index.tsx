import React from 'react';

import { List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';

import { IMessage } from '../../interfaces/message';
import Message from '../../views/Messages/components/Message';
import { MessageShape } from '../../views/Messages/shapes';

interface IProps {
  messages: IMessage[];
}

const MessagesList: React.FC<IProps> = React.memo(({ messages }) => {
  const renderMessagesList = messages.map((message) => (
    <ListItem key={message.id} sx={{ paddingX: 0 }}>
      <Message message={message} />
    </ListItem>
  ));

  return <List>{renderMessagesList}</List>;
});

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(MessageShape.isRequired).isRequired,
};

export default MessagesList;
