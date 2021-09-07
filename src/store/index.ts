import { combineReducers } from 'redux';
import { messagesReducer } from './messages/reducers';
import { RootState } from './types';
import { userReducer } from './user/reducers';

export const rootReducer: any = combineReducers<RootState>({
  messages: messagesReducer,
  user: userReducer,
});
