import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { FC, memo, ReactNode } from 'react';

interface IProps {
  children: ReactNode | ReactNode[];
}

const PageWrapper: FC<IProps> = memo<IProps>(
  ({ children }): JSX.Element => <Box sx={{ paddingY: 3 }}>{children}</Box>
);

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PageWrapper;
