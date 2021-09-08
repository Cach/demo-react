import { combineReducers } from 'redux';
import { messagesReducer } from './messages/reducers';
import { userReducer } from './user/reducers';

export const rootReducer: any = combineReducers({
  messages: messagesReducer,
  user: userReducer,
});
