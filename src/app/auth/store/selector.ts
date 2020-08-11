import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appstate.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(authFeatureSelector, (auth: AuthStateInterface) => {
   return auth.isSubmitting
})

export const validationErrorsSelector = createSelector(authFeatureSelector, (authState: AuthStateInterface) => {
    return authState.validationErrrors
})