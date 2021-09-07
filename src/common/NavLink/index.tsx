import { Link as MaterialLink } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { FC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface IProps {
  label: string;
  url: string;
}

const NavLink: FC<IProps> = memo<IProps>(
  ({ label, url }): JSX.Element => (
    <MaterialLink component={RouterLink} to={url}>
      {label}
    </MaterialLink>
  )
);

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavLink;
