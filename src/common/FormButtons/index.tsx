import { Stack } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { FC, memo, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const FormButtons: FC<IProps> = memo<IProps>(
  ({ children }): JSX.Element => (
    <Stack spacing={2} direction="row" justifyContent="flex-end">
      {children}
    </Stack>
  )
);

FormButtons.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormButtons;
