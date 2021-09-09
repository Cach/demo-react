import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';

export const getDateObject = (value: string | Date): Date => {
  if (value instanceof Date) {
    return value;
  }

  const date = parseISO(value);

  if (!isValid(date)) {
    return new Date();
  }

  return date;
};

export const formatDate = (value: string | Date): string =>
  format(getDateObject(value), 'dd.MM.yyyy, HH:mm');
