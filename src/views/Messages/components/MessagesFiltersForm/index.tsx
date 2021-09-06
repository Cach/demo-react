import { Box, Button, FormControl, Grid, Stack, TextField } from '@material-ui/core';
import { DatePicker, LocalizationProvider } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { messagesSetFilters } from '../../../../store/messages/actions';
import { RootState } from '../../../../store/types';

const MessagesFiltersForm: FC = memo(() => {
  const dispatch: Dispatch<RootState> = useDispatch<RootState>();
  const [date, setDate] = useState<Date | null>(null);
  const [user, setUser] = useState<string>('');

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
          <FormControl>
            <TextField label="User" variant="outlined" value={user} onChange={handleUserChange} />
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Input date"
                value={date}
                inputFormat="dd/MM/yyyy"
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} onKeyPress={handleKeypress} />}
              />
            </LocalizationProvider>
          </FormControl>
        </Grid>
      </Grid>

      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <Button onClick={handleReset} variant="outlined">
          Reset
        </Button>
      </Stack>
    </Box>
  );
});

export default MessagesFiltersForm;
