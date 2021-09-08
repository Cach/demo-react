import React from 'react';

import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const PageWrapper: React.FC = React.memo(({ children }) => (
  <Box sx={{ paddingY: 3 }}>{children}</Box>
));

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
