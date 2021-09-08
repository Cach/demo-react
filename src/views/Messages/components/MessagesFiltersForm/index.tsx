import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';

import { Box, Button, FormControl, Grid, TextField } from '@material-ui/core';
import { DatePicker, LocalizationProvider } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import { useDispatch } from 'react-redux';

import FormButtons from '../../../../common/FormButtons';
import { messagesSetFilters } from '../../../../store/messages/actions';

const MessagesFiltersForm: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const [date, setDate] = useState<Date | null>(null);
  const [user, setUser] = useState('');

  useEffect(() => {
    const filters = {
      date,
      user,
    };

    dispatch(messagesSetFilters(filters));
  }, [date, user, dispatch]);

  const handleDateChange = useCallback((data: Date | null) => {
    setDate(data);
  }, []);

  const handleUserChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  }, []);

  const handleKeypress = (event: KeyboardEvent<HTMLInputElement>): void => {
    event.preventDefault();
  };

  const handleReset = useCallback(() => {
    setDate(null);
    setUser('');
  }, []);

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField label="User" variant="outlined" value={user} onChange={handleUserChange} />
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of message"
                value={date}
                inputFormat="dd/MM/yyyy"
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} onKeyPress={handleKeypress} />}
              />
            </LocalizationProvider>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormButtons>
            <Button onClick={handleReset} variant="outlined">
              Reset
            </Button>
          </FormButtons>
        </Grid>
      </Grid>
    </Box>
  );
});

export default MessagesFiltersForm;
