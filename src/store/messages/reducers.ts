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
  [messageFormOpen.type]: (state: MessagesState): MessagesState => {
    const { form, ...otherState } = state;

    return {
      ...otherState,
      form: {
        ...form,
        isOpened: true,
      },
    };
  },
  [messageFormClose.type]: (state: MessagesState): MessagesState => {
    const { form, ...otherState } = state;

    return {
      ...otherState,
      form: {
        ...form,
        isOpened: false,
      },
    };
  },
  [messageFormRequest.type]: (state: MessagesState): MessagesState => {
    const { form, ...otherState } = state;

    return {
      ...otherState,
      form: {
        ...form,
        isSending: true,
      },
    };
  },
  [messageFormSuccess.type]: (state: MessagesState): MessagesState => {
    const { form, ...otherState } = state;

    return {
      ...otherState,
      form: {
        ...form,
        isSending: false,
      },
    };
  },
});
