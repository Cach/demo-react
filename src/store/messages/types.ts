import { IMessage } from '../../model/message.interface';

export enum MessagesStateTypes {
  loading = '@@MESSAGES/LOADING_STATE',
  request = '@@MESSAGES/REQUEST',
  set = '@@MESSAGES/SET',
  add = '@@MESSAGES/ADD',
  success = '@@MESSAGES/SUCCESS',
  failure = '@@MESSAGES/FAILURE',
  formOpen = '@@MESSAGES/FORM_OPEN',
  formClose = '@@MESSAGES/FORM_CLOSE',
  formRequest = '@@MESSAGES/FORM_REQUEST',
  formSuccess = '@@MESSAGES/FORM_SUCCESS',
  formFailure = '@@MESSAGES/FORM_FAILURE',
}

export interface MessageFormState {
  isOpened: boolean;
  isSending: boolean;
}

export interface MessagesState {
  isLoading: boolean;
  data: IMessage[];
  form: MessageFormState;
}

export interface MessagesLoadingStateAction {
  type: MessagesStateTypes.loading;
  payload: boolean;
}

export interface MessagesRequestStateAction {
  type: MessagesStateTypes.request;
}

export interface MessagesSetStateAction {
  type: MessagesStateTypes.set;
  payload: IMessage[];
}

export interface MessagesAddStateAction {
  type: MessagesStateTypes.add;
  payload: IMessage;
}

export interface MessagesSuccessStateAction {
  type: MessagesStateTypes.success;
}

export interface MessagesFailureStateAction {
  type: MessagesStateTypes.failure;
}

export interface MessageFormOpenStateAction {
  type: MessagesStateTypes.formOpen;
}

export interface MessageFormCloseStateAction {
  type: MessagesStateTypes.formClose;
}

export interface MessageFormRequestStateAction {
  type: MessagesStateTypes.formRequest;
}

export interface MessageFormSuccessStateAction {
  type: MessagesStateTypes.formSuccess;
}

export interface MessageFormFailureStateAction {
  type: MessagesStateTypes.formFailure;
}

export type MessagesActionTypes =
  | MessagesLoadingStateAction
  | MessagesRequestStateAction
  | MessagesSetStateAction
  | MessagesAddStateAction
  | MessagesSuccessStateAction
  | MessagesFailureStateAction
  | MessageFormOpenStateAction
  | MessageFormCloseStateAction
  | MessageFormRequestStateAction
  | MessageFormSuccessStateAction
  | MessageFormFailureStateAction;
