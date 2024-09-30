import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss',
})
export class ForgotPasswordFormComponent {
  forgotPasswordForm: FormGroup | undefined;

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
    console.log('Forgot Password Form...', this.forgotPasswordForm);
    this.router.navigate(['/', 'auth', 'reset'], {
      queryParams: {
        id: 'dGVzdA==',
      },
    });
  }
}
