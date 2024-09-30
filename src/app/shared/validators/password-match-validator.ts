import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(confirmPasswordControlName?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let confirmPassCtrlName: string = confirmPasswordControlName || 'confirmPassword';
    let confirmPasswordCtrl = control.get(confirmPassCtrlName);
    const password = control.get('password')?.value;
    const confirmPassword = confirmPasswordCtrl?.value;

    if (!password || !confirmPassword) {
      return null; // If either field is not filled yet, do not validate
    }

    if (password !== confirmPassword) {
      confirmPasswordCtrl?.setErrors({passwordMismatch: true});
      return { passwordMismatch: true };
    } else {
      if (confirmPasswordCtrl?.hasError('passwordMismatch')) {
        confirmPasswordCtrl?.setErrors(null); // Clear the error if passwords match
      }
    }
    return null;
  };
}
