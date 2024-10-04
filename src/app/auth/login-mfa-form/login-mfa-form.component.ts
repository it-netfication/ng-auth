import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputFieldTypeEnum } from '../../enums/form-input-field-type.enum';
import { ToastMessageService } from '../../services/toast-message/toast-message.service';

@Component({
  selector: 'app-login-mfa-form',
  templateUrl: './login-mfa-form.component.html',
  styleUrl: './login-mfa-form.component.scss',
})
export class LoginMfaFormComponent {
  loginMFAForm: FormGroup | undefined;
  formInputFieldTypeEnum = FormInputFieldTypeEnum;

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

    this.toastMessageService.showSuccessMessage(
      'Logged in with MFA successfully!',
      'MFA Login Success!',
      5000,
      false
    );
  }
}
