import PropTypes from 'prop-types';
import { UserType } from '../User/types';

export const MessageType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  user: UserType.isRequired,
});
