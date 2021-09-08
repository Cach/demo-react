import React from 'react';

import { Stack } from '@material-ui/core';
import PropTypes from 'prop-types';

const FormButtons: React.FC = React.memo(({ children }) => (
  <Stack spacing={2} direction="row" justifyContent="flex-end">
    {children}
  </Stack>
));

FormButtons.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormButtons;
