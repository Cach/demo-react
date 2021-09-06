import { ActionCreator, createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { addMessage, getMessages } from '../../api/messages';
import { IMessage, IMessageForm } from '../../model/message.interface';
import { timeout } from '../../utils/timeout';
import { RootState, ThunkResult } from '../types';
import { MessagesStateTypes } from './types';

export const messagesRequest = createAction<void, MessagesStateTypes.request>(
  MessagesStateTypes.request
);

export const messagesSet = createAction<IMessage[], MessagesStateTypes.set>(MessagesStateTypes.set);

export const messageAdd = createAction<IMessage, MessagesStateTypes.add>(MessagesStateTypes.add);

export const messagesSuccess = createAction<void, MessagesStateTypes.success>(
  MessagesStateTypes.success
);

export const messagesFailure = createAction<void, MessagesStateTypes.failure>(
  MessagesStateTypes.failure
);

export const messageFormOpen = createAction<void, MessagesStateTypes.formOpen>(
  MessagesStateTypes.formOpen
);

export const messageFormClose = createAction<void, MessagesStateTypes.formClose>(
  MessagesStateTypes.formClose
);

export const messageFormRequest = createAction<void, MessagesStateTypes.formRequest>(
  MessagesStateTypes.formRequest
);

export const messageFormSuccess = createAction<void, MessagesStateTypes.formSuccess>(
  MessagesStateTypes.formSuccess
);

export const fetchMessages: ActionCreator<ThunkResult<void>> =
  () => async (dispatch: Dispatch<RootState>) => {
    dispatch(messagesRequest());

    try {
      await timeout(1000);

      const messages = await getMessages();

      await dispatch(messagesSet(messages));

      dispatch(messagesSuccess());
    } catch (error) {
      toast.error('Some problems with loading data. Please try again...');

      dispatch(messagesFailure());
    }
  };

export const sendFormRequest: ActionCreator<ThunkResult<void>> =
  (data: IMessageForm) => async (dispatch: Dispatch<RootState>) => {
    dispatch(messageFormRequest());

    await timeout(1000);

    const message: IMessage = await addMessage(data);

    dispatch(messageAdd(message));

    toast.success('Message was successfully added');

    dispatch(messageFormClose());
    dispatch(messageFormSuccess());
  };
