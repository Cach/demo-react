import { createReducer, PayloadAction } from '@reduxjs/toolkit';

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

export const messagesReducer = createReducer(initialState, {
  [messagesRequest.type]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [messagesSet.type]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
  [messageAdd.type]: (state, action: PayloadAction<IMessage>) => {
    const { data: messages, ...otherState } = state;

    return {
      ...otherState,
      data: [...messages, action.payload],
    };
  },
  [messagesSuccess.type]: (state) => ({
    ...state,
    isLoading: false,
  }),
  [messagesFailure.type]: (state) => ({
    ...state,
    isLoading: false,
  }),
  [messageFormOpen.type]: (state) => changeFormOpened(state, true),
  [messageFormClose.type]: (state) => changeFormOpened(state, false),
  [messageFormRequest.type]: (state) => changeFormSending(state, true),
  [messageFormSuccess.type]: (state) => changeFormSending(state, false),
  [messagesFormFailure.type]: (state) => changeFormSending(state, false),
  [messagesSetFilters.type]: (
    state,
    action: PayloadAction<IMessagesFiltersState>
  ): IMessagesState => ({
    ...state,
    filters: action.payload,
  }),
});
