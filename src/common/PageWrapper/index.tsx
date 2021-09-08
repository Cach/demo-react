import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode | ReactNode[];
}

const PageWrapper: React.FC<IProps> = React.memo<IProps>(({ children }) => (
  <Box sx={{ paddingY: 3 }}>{children}</Box>
));

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
