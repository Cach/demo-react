import { Container } from '@material-ui/core';
import React, { FC, memo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../../common/Header';
import Messages from '../Messages';
import NotFound from '../NotFound';
import User from '../User';

const Root: FC = memo(
  (): JSX.Element => (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={Messages} />

            <Route path="/users/:id" component={User} />

            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </Container>
    </BrowserRouter>
  )
);

export default Root;
