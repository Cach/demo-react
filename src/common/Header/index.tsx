import { Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import NavLink from '../NavLink';

const toolbarSX = {
  borderBottom: 1,
  borderColor: 'divider',
};

const typographySX = {
  flex: 1,
};

const Header: React.FC = React.memo(() => (
  <Toolbar sx={toolbarSX}>
    <Typography component="h2" variant="h5" color="inherit" align="center" noWrap sx={typographySX}>
      <NavLink url="/" label="Demo app" />
    </Typography>
  </Toolbar>
));

export default Header;
