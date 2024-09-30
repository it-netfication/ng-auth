import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/validators/password-match-validator';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { ToastMessageService } from '../../services/toast-message/toast-message.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent {
  signupForm: FormGroup | undefined;
  hide = signal(true);
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor(private toastMessageService: ToastMessageService) {
    this.initSignupForm();
  }

  initSignupForm() {
    this.signupForm = new FormGroup(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        phone: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('[0-9]*'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
        agreeTerms: new FormControl(false, [Validators.requiredTrue]),
      },
      { validators: passwordMatchValidator() }
    );
  }

  toggleVisibility(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  submitSignupForm() {
    console.log('signup Form...', this.signupForm);
    if (this.signupForm?.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    console.log('going to submit and showing success toast message');
    this.toastMessageService.showSuccessMessage(
      'Your account registered successfully!'
    );
  }
}
