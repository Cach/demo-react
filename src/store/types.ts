import { ThunkAction } from '@reduxjs/toolkit';
import { rootReducer } from './index';
import { MessagesActionTypes } from './messages/types';

export type RootState = ReturnType<typeof rootReducer>;
export type RootTypes = MessagesActionTypes;
export type ThunkResult<T> = ThunkAction<T, RootState, null, RootTypes>;
