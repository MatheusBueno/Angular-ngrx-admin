import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ChangeLoadingComponent } from './../../actions/loading.action';
import { LoginWithEmailFailure, LoginWithEmail } from './actions/login.actions';
import * as fromLoginPage from './reducer/login.reducer';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromLoginPage.State>,
  ) { }

  ngOnInit() {
    this.loginForm = this.createform();
  }

  /**
   * Set a new form instance.
   */
  createform() {
    return this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


  /**
   * Submit form values.
   */
  onSubmit(form: FormGroup) {

    if (form.valid) {
      console.log(form);
      const { email, password } = form.getRawValue();
      this.store.dispatch(new ChangeLoadingComponent(true));
      this.store.dispatch(new LoginWithEmail({ email, password }));

    } else {
      this.store.dispatch(new LoginWithEmailFailure(`Form Error`));
      console.error(form);
      this.markFormGroupTouched(form);
    }
  }

  /**
   * Mark all field with touched to show errors.
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
