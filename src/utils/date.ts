import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';

export const getDateObject = (value: string | Date): Date => {
  if (value instanceof Date) {
    return value;
  }

  return parseISO(value);
};

export const formatDate = (value: string | Date): string => {
  const date = getDateObject(value);

  if (!isValid(date)) {
    return '';
  }

  return format(date, 'dd.MM.yyyy, HH:mm');
};
