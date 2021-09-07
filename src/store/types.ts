import { ThunkAction } from '@reduxjs/toolkit';
import { rootReducer } from './index';
import { MessagesActionTypes } from './messages/types';
import { UserActionTypes } from './user/types';

export type RootState = ReturnType<typeof rootReducer>;
export type RootTypes = MessagesActionTypes | UserActionTypes;
export type ThunkResult<T> = ThunkAction<T, RootState, null, RootTypes>;
