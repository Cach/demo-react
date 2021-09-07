import { IMessage } from '../../model/message.interface';
import { IUser } from '../../model/user.interface';

export interface IUserState {
  isLoading: boolean;
  data: IUser | null;
  messages: IMessage[];
  error: string | null;
}

export enum UserStateTypes {
  loading = '@@USER/LOADING_STATE',
  request = '@@USER/REQUEST',
  set = '@@USER/SET',
  success = '@@USER/SUCCESS',
  failure = '@@USER/FAILURE',
  clear = '@@USER/CLEAR',
  setMessages = '@@USER/SET_MESSAGES',
}

export interface UserLoadingStateAction {
  type: UserStateTypes.loading;
  payload: boolean;
}

export interface UserRequestStateAction {
  type: UserStateTypes.request;
}

export interface UserSetStateAction {
  type: UserStateTypes.set;
  payload: IUser[];
}

export interface UserSuccessStateAction {
  type: UserStateTypes.success;
}

export interface UserFailureStateAction {
  type: UserStateTypes.failure;
  payload: string;
}

export interface UserClearStateAction {
  type: UserStateTypes.clear;
}

export interface UserSetMessagesStateAction {
  type: UserStateTypes.setMessages;
  payload: IMessage[];
}

export type UserActionTypes =
  | UserLoadingStateAction
  | UserRequestStateAction
  | UserSetStateAction
  | UserSuccessStateAction
  | UserFailureStateAction
  | UserClearStateAction
  | UserSetMessagesStateAction;
