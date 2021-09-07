import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';
import React, { FC, memo } from 'react';

interface IProps {
  label: string;
  handleClick: () => void;
}

const SendButton: FC<IProps> = memo<IProps>(
  ({ label, handleClick }): JSX.Element => (
    <Button variant="outlined" endIcon={<SendIcon />} onClick={handleClick}>
      {label}
    </Button>
  )
);

SendButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SendButton;
