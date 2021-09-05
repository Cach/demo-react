import { IMessage } from '../../model/message.interface';
import { RootState } from '../types';

export const getMessages = (state: RootState): IMessage[] => state.messages.data;
export const getMessagesLoading = (state: RootState): boolean => state.messages.isLoading;
export const getFormOpen = (state: RootState): boolean => state.messages.form.isOpened;
export const getFormIsSending = (state: RootState): boolean => state.messages.form.isSending;
