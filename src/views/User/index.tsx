import React, { useEffect } from 'react';

import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import Loader from '../../common/Loader';
import PageWrapper from '../../common/PageWrapper';
import { fetchUser } from '../../store/user/actions';
import UserInfo from './components/UserInfo';
import UserMessages from './components/UserMessages';
import { useViewedUser } from './hooks';

interface IParams {
  id: string;
}

const User: React.FC = React.memo(() => {
  const { id } = useParams<IParams>();
  const [user, { isLoading, error }] = useViewedUser();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(+id));
  }, [dispatch, id]);

  return (
    <PageWrapper>
      {isLoading && <Loader size={48} />}

      {user && (
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ marginTop: 2 }}>
            <UserInfo user={user} />
          </Grid>

          <Grid item xs={9}>
            <UserMessages user={user} />
          </Grid>
        </Grid>
      )}

      {error && <Redirect to="/404" />}
    </PageWrapper>
  );
});

export default User;
