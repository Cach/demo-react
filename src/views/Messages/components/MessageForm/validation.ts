import * as Yup from 'yup';

export const MESSAGE_LIMIT = 200;

export const ValidationSchema = Yup.object().shape({
  message: Yup.string()
    .max(MESSAGE_LIMIT, `The message should be not more ${MESSAGE_LIMIT} symbols`)
    .required('The message is required'),
});
