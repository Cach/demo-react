import isSameDay from 'date-fns/isSameDay';

import { IMessage } from '../../interfaces/message';
import { RootState } from '../types';
import { IMessagesFiltersState } from './types';

const filterMessages = (messages: IMessage[], filters: IMessagesFiltersState): IMessage[] => {
  const searchDate = filters.date;
  const searchUser = filters.user.toLowerCase();

  let filteredMessages = messages;

  if (searchDate) {
    filteredMessages = filteredMessages.filter((message) =>
      isSameDay(new Date(message.date), searchDate)
    );
  }

  if (searchUser.length) {
    filteredMessages = filteredMessages.filter((message) =>
      message.user.fullName.toLowerCase().includes(searchUser)
    );
  }

  return filteredMessages;
};

export const getMessages = (state: RootState): IMessage[] =>
  filterMessages(state.messages.data, state.messages.filters);

export const getMessagesLoading = (state: RootState): boolean => state.messages.isLoading;
export const getFormOpen = (state: RootState): boolean => state.messages.form.isOpened;
export const getFormIsSending = (state: RootState): boolean => state.messages.form.isSending;
