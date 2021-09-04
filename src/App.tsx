import {
  Container,
  createTheme,
  CssBaseline,
  Theme,
  ThemeProvider,
} from '@material-ui/core';
import React from 'react';

const theme: Theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <main>Demo</main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
