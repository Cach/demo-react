import React from 'react';

import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

interface IProps {
  value: string;
  max: number;
}

const CharacterCounter: React.FC<IProps> = React.memo(({ value, max }) => (
  <Typography variant="caption" display="block" gutterBottom align="right">
    {value.length}/{max}
  </Typography>
));

CharacterCounter.propTypes = {
  value: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
};

export default CharacterCounter;
