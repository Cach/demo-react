import { Dispatch } from 'react';

import { ActionCreator, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { getMessagesByUser } from '../../api/messages';
import { getUser } from '../../api/users';
import { NotFoundError } from '../../entity/not-found';
import { IMessage } from '../../model/message.interface';
import { IUser } from '../../model/user.interface';
import { timeout } from '../../utils/timeout';
import { RootState, ThunkResult } from '../types';
import { UserStateTypes } from './types';

export const userRequest = createAction<void, UserStateTypes.request>(UserStateTypes.request);
export const userSet = createAction<IUser, UserStateTypes.set>(UserStateTypes.set);
export const userSuccess = createAction<void, UserStateTypes.success>(UserStateTypes.success);
export const userFailure = createAction<Error, UserStateTypes.failure>(UserStateTypes.failure);
export const userClear = createAction<void, UserStateTypes.clear>(UserStateTypes.clear);
export const userSetMessages = createAction<IMessage[], UserStateTypes.setMessages>(
  UserStateTypes.setMessages
);

export const fetchUser: ActionCreator<ThunkResult<void>> =
  (id: number) => async (dispatch: Dispatch<RootState>) => {
    dispatch(userClear());
    dispatch(userRequest());

    try {
      await timeout(1000);

      const user = await getUser(id);

      dispatch(userSet(user));
    } catch (e) {
      if (e instanceof NotFoundError) {
        toast.error(e.message);
      }

      const error = typeof e === 'string' ? new Error(e) : (e as Error);

      dispatch(userFailure(error));

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
