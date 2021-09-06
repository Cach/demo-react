import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { IMessage } from '../../model/message.interface';
import {
  messageAdd,
  messageFormClose,
  messageFormOpen,
  messageFormRequest,
  messageFormSuccess,
  messagesFailure,
  messagesFormFailure,
  messagesRequest,
  messagesSet,
  messagesSetFilters,
  messagesSuccess,
} from './actions';
import { IMessagesFiltersState, IMessagesState } from './types';

const initialState: IMessagesState = {
  isLoading: false,
  data: [],
  form: {
    isOpened: false,
    isSending: false,
  },
  filters: {
    date: null,
    user: '',
  },
};

const changeFormSending = (state: IMessagesState, isSending: boolean): IMessagesState => {
  const { form, ...otherState } = state;

  return {
    ...otherState,
    form: {
      ...form,
      isSending,
    },
  };
};

const changeFormOpened = (state: IMessagesState, isOpened: boolean): IMessagesState => {
  const { form, ...otherState } = state;

  return {
    ...otherState,
    form: {
      ...form,
      isOpened,
    },
  };
};

export const messagesReducer: Reducer<IMessagesState> = createReducer(initialState, {
  [messagesRequest.type]: (state: IMessagesState): IMessagesState => ({
    ...state,
    isLoading: true,
  }),
  [messagesSet.type]: (
    state: IMessagesState,
    action: PayloadAction<IMessage[]>
  ): IMessagesState => ({
    ...state,
    data: action.payload,
  }),
  [messageAdd.type]: (state: IMessagesState, action: PayloadAction<IMessage>): IMessagesState => {
    const { data: messages, ...otherState } = state;

    return {
      ...otherState,
      data: [...messages, action.payload],
    };
  },
  [messagesSuccess.type]: (state: IMessagesState): IMessagesState => ({
    ...state,
    isLoading: false,
  }),
  [messagesFailure.type]: (state: IMessagesState): IMessagesState => ({
    ...state,
    isLoading: false,
  }),
  [messageFormOpen.type]: (state: IMessagesState): IMessagesState => changeFormOpened(state, true),
  [messageFormClose.type]: (state: IMessagesState): IMessagesState =>
    changeFormOpened(state, false),
  [messageFormRequest.type]: (state: IMessagesState): IMessagesState =>
    changeFormSending(state, true),
  [messageFormSuccess.type]: (state: IMessagesState): IMessagesState =>
    changeFormSending(state, false),
  [messagesFormFailure.type]: (state: IMessagesState): IMessagesState =>
    changeFormSending(state, false),
  [messagesSetFilters.type]: (
    state: IMessagesState,
    action: PayloadAction<IMessagesFiltersState>
  ): IMessagesState => ({
    ...state,
    filters: action.payload,
  }),
});
