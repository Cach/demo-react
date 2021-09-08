import React from 'react';

import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';

interface IProps {
  label: string;
  onClick: () => void;
}

const SendButton: React.FC<IProps> = React.memo(({ label, onClick }) => (
  <Button variant="outlined" endIcon={<SendIcon />} onClick={onClick}>
    {label}
  </Button>
));

SendButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SendButton;
