import React, { ReactNode } from 'react';

import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import PropTypes from 'prop-types';

interface IProps {
  title: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const FormDialog: React.FC<IProps> = React.memo<IProps>(
  ({ title, description, isOpen, onClose, children }) => (
    <Dialog open={isOpen} onClose={onClose} fullWidth>
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
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

FormDialog.defaultProps = {
  description: undefined,
};

export default FormDialog;
