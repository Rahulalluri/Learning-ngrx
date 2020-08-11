import { AuthStateInterface } from "../types/authState.interface";
import { registerAction, registerSuccessAction, registerFailureAction } from './actions/register.action';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    validationErrrors: null,
    isLoggedIn: null
}

const authReducer = createReducer(initialState, 
    on(registerAction, (state): AuthStateInterface =>({
    ...state,
    isSubmitting: true,
    validationErrrors: null,
})),on(registerSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
})),on(registerFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrrors: action.errors,
})))

export function reducers(state: AuthStateInterface, action: Action){
    return authReducer(state, action);
}