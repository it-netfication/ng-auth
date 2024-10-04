import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputFieldTypeEnum } from '../../enums/form-input-field-type.enum';
import { ToastMessageService } from '../../services/toast-message/toast-message.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  loginForm: FormGroup;
  hide = signal(true);
  isMFA: boolean = false;
  formInputFieldTypeEnum = FormInputFieldTypeEnum;

  constructor(private toastMessageService: ToastMessageService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  toggleVisibility(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  submitLoginForm() {
    if (this.loginForm?.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.toastMessageService.showSuccessMessage(
      'Login form submitted successfully!'
    );

    this.isMFA = true;
  }
}
