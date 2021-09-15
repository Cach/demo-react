import React from 'react';

import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

interface IProps {
  currentLength: number;
  maxLength: number;
}

const CharacterCounter: React.FC<IProps> = React.memo(({ currentLength, maxLength }) => (
  <Typography variant="caption" display="block" gutterBottom align="right">
    {currentLength}/{maxLength}
  </Typography>
));

CharacterCounter.propTypes = {
  currentLength: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default CharacterCounter;
