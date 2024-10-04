import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormInputFieldTypeEnum } from '../../enums/form-input-field-type.enum';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss',
})
export class ForgotPasswordFormComponent {
  forgotPasswordForm: FormGroup | undefined;
  formInputFieldTypeEnum = FormInputFieldTypeEnum;

  constructor(private router: Router) {
    this.initForgotPasswordForm();
  }

  initForgotPasswordForm() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submitForgotPasswordForm() {
    if (this.forgotPasswordForm?.invalid) {
      this.forgotPasswordForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/', 'auth', 'reset-password']);
  }
}
