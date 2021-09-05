import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { LoadingButton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React, { FC, memo, ReactNode, useCallback } from 'react';

interface IProps {
  title: string;
  description?: string;
  isOpen: boolean;
  isSending?: boolean;
  handleSubmit: () => void;
  handleClose: () => void;
  children: ReactNode;
}

const FormDialog: FC<IProps> = memo<IProps>(
  ({ title, description, isSending, isOpen, handleSubmit, handleClose, children }) => {
    const handleCloseEvent = useCallback(() => {
      if (isSending) {
        return;
      }

      handleClose();
    }, [handleClose, isSending]);

    return (
      <Dialog open={isOpen} onClose={handleCloseEvent} fullWidth>
        <DialogTitle>{title}</DialogTitle>

        <DialogContent>
          {description && <DialogContentText>{description}</DialogContentText>}

          {children}
        </DialogContent>

        <DialogActions>
          <Button color="error" onClick={handleCloseEvent} disabled={isSending}>
            Close
          </Button>

          <LoadingButton
            loading={isSending}
            loadingPosition="start"
            startIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Send
          </LoadingButton>
        </DialogActions>
      </Dialog>
    );
  }
);

FormDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isSending: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

FormDialog.defaultProps = {
  description: undefined,
  isSending: false,
};

export default FormDialog;
