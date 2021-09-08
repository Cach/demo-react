import { Stack } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const FormButtons: React.FC<IProps> = React.memo<IProps>(({ children }) => (
  <Stack spacing={2} direction="row" justifyContent="flex-end">
    {children}
  </Stack>
));

FormButtons.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormButtons;
