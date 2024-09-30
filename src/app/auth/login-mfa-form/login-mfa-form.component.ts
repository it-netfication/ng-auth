import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastMessageService } from '../../services/toast-message/toast-message.service';

@Component({
  selector: 'app-login-mfa-form',
  templateUrl: './login-mfa-form.component.html',
  styleUrl: './login-mfa-form.component.scss',
})
export class LoginMfaFormComponent {
  loginMFAForm: FormGroup | undefined;

  constructor(private toastMessageService: ToastMessageService) {
    this.initLoginMFAForm();
  }

  initLoginMFAForm() {
    this.loginMFAForm = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  submitLoginMFAForm() {
    if (this.loginMFAForm?.invalid) {
      this.loginMFAForm.markAllAsTouched();
      return;
    }

    console.log('2nd Form login', this.loginMFAForm?.value);
    this.toastMessageService.showSuccessMessage(
      'Logged in with MFA successfully!',
      'MFA Login Success!',
      5000,
      false
    );
  }
}
