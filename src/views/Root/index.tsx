import { Container } from '@material-ui/core';
import React, { FC, memo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../../common/Header';
import Messages from '../Messages';
import NotFound from '../NotFound';

const Root: FC = memo(
  (): JSX.Element => (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Header />

        <main>
          <Switch>
            <Route exact path="/">
              <Messages />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </Container>
    </BrowserRouter>
  )
);

export default Root;
