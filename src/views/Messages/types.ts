import PropTypes from 'prop-types';

import { UserShape } from '../User/types';

export const MessageShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  user: UserShape.isRequired,
});
