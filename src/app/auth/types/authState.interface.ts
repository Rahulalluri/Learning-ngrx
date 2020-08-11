import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backEndErrors.interface';

export interface AuthStateInterface {
    isSubmitting: boolean;
    currentUser: CurrentUserInterface | null;
    isLoggedIn: boolean | null;
    validationErrrors: BackendErrorsInterface | null;
}