import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { FC, memo, ReactNode } from 'react';

interface IProps {
  title: string;
  description?: string;
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}

const FormDialog: FC<IProps> = memo<IProps>(
  ({ title, description, isOpen, handleClose, children }) => (
    <Dialog open={isOpen} onClose={handleClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        {description && <DialogContentText>{description}</DialogContentText>}

        {children}
      </DialogContent>
    </Dialog>
  )
);

FormDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

FormDialog.defaultProps = {
  description: undefined,
};

export default FormDialog;
