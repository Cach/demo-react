import { IMessage } from '../../interfaces/message';
import { IUser } from '../../interfaces/user';
import { RootState } from '../types';

export const getUser = (state: RootState): IUser | null => state.user.data;
export const getUserMessages = (state: RootState): IMessage[] => state.user.messages;
export const getUserLoading = (state: RootState): boolean => state.user.isLoading;
export const getUserError = (state: RootState): Error | null => state.user.error;
