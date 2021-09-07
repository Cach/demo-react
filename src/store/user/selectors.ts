import { IMessage } from '../../model/message.interface';
import { IUser } from '../../model/user.interface';
import { RootState } from '../types';

export const getUser = (state: RootState): IUser | null => state.user.data;
export const getUserMessages = (state: RootState): IMessage[] => state.user.messages;
export const getUserLoading = (state: RootState): boolean => state.user.isLoading;
export const getUserError = (state: RootState): string | null => state.user.error;
