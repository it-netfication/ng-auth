import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { ToastMessageService } from '../../services/toast-message/toast-message.service';
import { passwordMatchValidator } from '../../shared/validators/password-match-validator';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrl: './reset-password-form.component.scss',
})
export class ResetPasswordFormComponent {
  resetPasswordForm: FormGroup | undefined;
  hide = signal(true);
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor(private toastMessageService: ToastMessageService) {
    this.initResetPasswordForm();
  }

  initResetPasswordForm() {
    this.resetPasswordForm = new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: passwordMatchValidator() }
    );
  }

  toggleVisibility(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  submitResetPasswordForm() {
    if (this.resetPasswordForm?.invalid) {
      this.resetPasswordForm.markAllAsTouched();
      return;
    }
    console.log('Reset Password Form...', this.resetPasswordForm);
    this.toastMessageService.showSuccessMessage('Password reset successfully!');
  }
}
