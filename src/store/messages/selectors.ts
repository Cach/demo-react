import isSameDay from 'date-fns/isSameDay';

import { IMessage } from '../../model/message.interface';
import { escape, isSubstring } from '../../utils/string';
import { RootState } from '../types';
import { IMessagesFiltersState } from './types';

const filterMessages = (messages: IMessage[], filters: IMessagesFiltersState): IMessage[] => {
  const { date, user } = filters;

  if (!date && !user?.length) {
    return messages;
  }

  return messages.filter((message: IMessage) => {
    if (date && !isSameDay(new Date(message.date), date)) {
      return false;
    }

    const username = `${message.user.firstName} ${message.user.lastName}`;

    return !user?.length || isSubstring(username, escape(user));
  });
};

export const getMessages = (state: RootState): IMessage[] =>
  filterMessages(state.messages.data, state.messages.filters);

export const getMessagesLoading = (state: RootState): boolean => state.messages.isLoading;
export const getFormOpen = (state: RootState): boolean => state.messages.form.isOpened;
export const getFormIsSending = (state: RootState): boolean => state.messages.form.isSending;
