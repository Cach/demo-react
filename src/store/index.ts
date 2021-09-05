import { combineReducers } from 'redux';
import { messagesReducer } from './messages/reducers';
import { RootState } from './types';

export const rootReducer: any = combineReducers<RootState>({
  messages: messagesReducer,
});
