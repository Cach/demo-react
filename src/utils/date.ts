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
  if (!isValid(value)) {
    return '';
  }

  return format(getDateObject(value), 'dd.MM.yyyy, HH:mm');
};
