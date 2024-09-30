import { Injectable } from '@angular/core';
import { IToastMessage } from '../../interfaces/toast-message';

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {
  toasts: IToastMessage[] = [];

  constructor() {}

  showErrorMessage(
    message: string,
    headingText?: string,
    delay?: number,
    autoHide?: boolean
  ) {
    console.log('error message...');

    this.toasts.push({
      status: 'error',
      headingText: headingText ?? 'Error!',
      message: message,
      delay: delay,
      autoHide: autoHide,
    });
  }

  showSuccessMessage(
    message: string,
    headingText?: string,
    delay?: number,
    autoHide?: boolean
  ) {
    console.log('success message...');
    this.toasts.push({
      status: 'success',
      headingText: headingText ?? 'Success!',
      message: message,
      delay: delay,
      autoHide: autoHide,
    });
  }

  showMessage(
    message: string,
    headingText?: string,
    delay?: number,
    autoHide?: boolean
  ) {
    console.log('toast message...');

    this.toasts.push({
      status: '',
      headingText: headingText ?? '',
      message: message,
      delay: delay,
      autoHide: autoHide,
    });
  }

  remove(toast: IToastMessage) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}
