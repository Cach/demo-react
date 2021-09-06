import { createTheme, CssBaseline, Theme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Root from './views/Root';

const theme: Theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Root />

    <ToastContainer autoClose={3000} pauseOnFocusLoss={false} />
  </ThemeProvider>
);

export default App;
