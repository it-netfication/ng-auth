import { Component } from '@angular/core';
import { ToastMessageService } from '../../../services/toast-message/toast-message.service';

@Component({
  selector: 'toast-message',
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss',
})
export class ToastMessageComponent {
  constructor(public toastMessageService: ToastMessageService) {}
}
