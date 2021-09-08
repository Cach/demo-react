import format from 'date-fns/format';

export const formatStringDate = (date: string): string =>
  format(new Date(date), 'dd.MM.yyyy, HH:mm');
