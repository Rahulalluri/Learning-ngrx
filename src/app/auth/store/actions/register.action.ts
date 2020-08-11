import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backEndErrors.interface';

export const registerAction = createAction(
  ActionTypes.Register,
  props<{ request: RegisterRequestInterface}>()
);

export const registerSuccessAction = createAction(
  ActionTypes.Register_Success,
  props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(
  ActionTypes.Register_Faliure,
  props<{errors: BackendErrorsInterface}>()
)