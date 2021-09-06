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
  messagesSuccess,
} from './actions';
import { MessagesState } from './types';

const initialState: MessagesState = {
  isLoading: false,
  data: [],
  form: {
    isOpened: false,
    isSending: false,
  },
};

const changeFormSending = (state: MessagesState, isSending: boolean): MessagesState => {
  const { form, ...otherState } = state;

  return {
    ...otherState,
    form: {
      ...form,
      isSending,
    },
  };
};

const changeFormOpened = (state: MessagesState, isOpened: boolean): MessagesState => {
  const { form, ...otherState } = state;

  return {
    ...otherState,
    form: {
      ...form,
      isOpened,
    },
  };
};

export const messagesReducer: Reducer<MessagesState> = createReducer(initialState, {
  [messagesRequest.type]: (state: MessagesState): MessagesState => ({
    ...state,
    isLoading: true,
  }),
  [messagesSet.type]: (state: MessagesState, action: PayloadAction<IMessage[]>): MessagesState => ({
    ...state,
    data: action.payload,
  }),
  [messageAdd.type]: (state: MessagesState, action: PayloadAction<IMessage>): MessagesState => {
    const { data: messages, ...otherState } = state;

    return {
      ...otherState,
      data: [...messages, action.payload],
    };
  },
  [messagesSuccess.type]: (state: MessagesState): MessagesState => ({
    ...state,
    isLoading: false,
  }),
  [messagesFailure.type]: (state: MessagesState): MessagesState => ({
    ...state,
    isLoading: false,
  }),
  [messageFormOpen.type]: (state: MessagesState): MessagesState => changeFormOpened(state, true),
  [messageFormClose.type]: (state: MessagesState): MessagesState => changeFormOpened(state, false),
  [messageFormRequest.type]: (state: MessagesState): MessagesState =>
    changeFormSending(state, true),
  [messageFormSuccess.type]: (state: MessagesState): MessagesState =>
    changeFormSending(state, false),
  [messagesFormFailure.type]: (state: MessagesState): MessagesState =>
    changeFormSending(state, false),
});
