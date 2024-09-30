import { Component } from '@angular/core';
import { ToastMessageService } from './services/toast-message/toast-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'netfication-ui';

  constructor() {}
}
