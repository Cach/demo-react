import React, { useEffect } from 'react';

import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import Loader from '../../common/Loader';
import PageWrapper from '../../common/PageWrapper';
import { fetchUser, userClear } from '../../store/user/actions';
import { getUser, getUserError, getUserLoading } from '../../store/user/selectors';
import UserInfo from './components/UserInfo';
import UserMessages from './components/UserMessages';

interface IParams {
  id: string;
}

const User: React.FC = React.memo(() => {
  const { id } = useParams<IParams>();

  const isLoading = useSelector(getUserLoading);
  const user = useSelector(getUser);
  const error = useSelector(getUserError);
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(userClear());
    },
    []
  );

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
