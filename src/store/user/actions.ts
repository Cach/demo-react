import { ActionCreator, createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { getMessagesByUser } from '../../api/messages';
import { getUser } from '../../api/users';
import { IMessage } from '../../model/message.interface';
import { IUser } from '../../model/user.interface';
import { timeout } from '../../utils/timeout';
import { RootState, ThunkResult } from '../types';
import { UserStateTypes } from './types';

export const userRequest = createAction<void, UserStateTypes.request>(UserStateTypes.request);
export const userSet = createAction<IUser, UserStateTypes.set>(UserStateTypes.set);
export const userSuccess = createAction<void, UserStateTypes.success>(UserStateTypes.success);
export const userFailure = createAction<void, UserStateTypes.failure>(UserStateTypes.failure);
export const userClear = createAction<void, UserStateTypes.clear>(UserStateTypes.clear);
export const userSetMessages = createAction<IMessage[], UserStateTypes.setMessages>(
  UserStateTypes.setMessages
);

export const fetchUser: ActionCreator<ThunkResult<void>> =
  (id: number) => async (dispatch: Dispatch<RootState>) => {
    dispatch(userRequest());

    try {
      await timeout(1000);

      const user = await getUser(id);

      await dispatch(userSet(user));
    } catch {
      toast.error('User not found');

      dispatch(userFailure());

      return;
    }

    dispatch(userSuccess());
  };

export const fetchUserMessages: ActionCreator<ThunkResult<void>> =
  (id: number) => async (dispatch: Dispatch<RootState>) => {
    let messages: IMessage[] = [];

    try {
      messages = await getMessagesByUser(id);
    } catch {
      toast.error('Some problems with loading data.');
    }

    dispatch(userSetMessages(messages));
  };
