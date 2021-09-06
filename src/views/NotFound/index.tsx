import { Box, Typography } from '@material-ui/core';
import React, { FC, memo } from 'react';

const NotFound: FC = memo(
  (): JSX.Element => (
    <Box
      sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" gutterBottom component="div">
        404
      </Typography>

      <Typography variant="h3" component="div">
        Page not found
      </Typography>
    </Box>
  )
);

export default NotFound;
