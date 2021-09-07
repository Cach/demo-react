import { Toolbar, Typography } from '@material-ui/core';
import React, { FC, memo } from 'react';
import NavLink from '../NavLink';

const Header: FC = memo(
  (): JSX.Element => (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        <NavLink url="/" label="Demo app" />
      </Typography>
    </Toolbar>
  )
);

export default Header;
