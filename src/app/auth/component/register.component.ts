import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from 'src/app/auth/store/actions/register.action';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selector';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backEndErrors.interface';
// import { AuthService } from 'src/app/auth/services/auth.service';
// import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
    selector:'mc-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;

    constructor(private fb: FormBuilder, private store: Store) {

    }
    ngOnInit(): void {
        this.initializeForm();
        this.initializeValue();
    }

    initializeForm(): void {
        this.form = this.fb.group({
            username:['', Validators.required],
            email:['', Validators.required],
            password:['', Validators.required]
        });
    }

    onSubmit() {
        console.log('submitted', this.form.value);
        const request: RegisterRequestInterface = {
            user: this.form.value,
        }
        this.store.dispatch(registerAction({request}));
        // this.authService.register(this.form.value).subscribe((currentUser: CurrentUserInterface) =>{
        // });
    }

    initializeValue(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }
}