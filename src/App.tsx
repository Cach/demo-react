import { Container, createTheme, CssBaseline, Theme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Header from './common/Header';
import Messages from './views/Messages';

const theme: Theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="xl">
      <Header />

      <main>
        <Messages />
      </main>

      <ToastContainer />
    </Container>
  </ThemeProvider>
);

export default App;
