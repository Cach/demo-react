import React, { useCallback, useEffect } from 'react';

import { Box, Button, FormControl, Grid, TextField } from '@material-ui/core';
import { DatePicker, LocalizationProvider } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import FormButtons from '../../../../common/FormButtons';
import { IMessageFiltersForm } from '../../../../interfaces/message';
import { messagesSetFilters } from '../../../../store/messages/actions';

const MessagesFiltersForm: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const { values, setFieldValue, resetForm, handleChange } = useFormik<IMessageFiltersForm>({
    initialValues: {
      date: null,
      user: '',
    },
    onSubmit: (filters) => {
      dispatch(messagesSetFilters(filters));
    },
  });

  useEffect(() => {
    dispatch(messagesSetFilters(values));
  }, [dispatch, values]);

  const handleDateChange = useCallback(
    (date: Date | null) => {
      setFieldValue('date', date);
    },
    [setFieldValue]
  );

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              label="User"
              variant="outlined"
              name="user"
              value={values.user}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of message"
                value={values.date}
                inputFormat="dd/MM/yyyy"
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} name="date" />}
              />
            </LocalizationProvider>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormButtons>
            <Button onClick={() => resetForm()} variant="outlined">
              Reset
            </Button>
          </FormButtons>
        </Grid>
      </Grid>
    </Box>
  );
});

export default MessagesFiltersForm;
