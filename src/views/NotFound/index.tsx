import React from 'react';

import { Box, Typography } from '@material-ui/core';

const NotFound: React.FC = React.memo(() => (
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
));

export default NotFound;
