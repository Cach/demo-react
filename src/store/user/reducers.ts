import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from '../../model/message.interface';
import { IUser } from '../../model/user.interface';
import {
  userClear,
  userFailure,
  userRequest,
  userSet,
  userSetMessages,
  userSuccess,
} from './actions';
import { IUserState } from './types';

const initialState: IUserState = {
  isLoading: false,
  data: null,
  messages: [],
  error: null,
};

export const userReducer = createReducer(initialState, {
  [userRequest.type]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [userSet.type]: (state, action: PayloadAction<IUser>) => ({
    ...state,
    data: action.payload,
  }),
  [userSuccess.type]: (state) => ({
    ...state,
    isLoading: false,
  }),
  [userFailure.type]: (state, action: PayloadAction<Error>) => ({
    ...state,
    isLoading: false,
    error: action.payload,
  }),
  [userClear.type]: () => initialState,
  [userSetMessages.type]: (state, action: PayloadAction<IMessage[]>) => ({
    ...state,
    messages: action.payload,
  }),
});
