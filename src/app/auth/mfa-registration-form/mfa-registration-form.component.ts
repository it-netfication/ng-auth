import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMfaConfiguration } from '../../interfaces/mfa-configuration.interface';
import { ConstantService } from '../../services/constant.service';
import { ToastMessageService } from '../../services/toast-message/toast-message.service';

@Component({
  selector: 'app-mfa-registration-form',
  templateUrl: './mfa-registration-form.component.html',
  styleUrl: './mfa-registration-form.component.scss',
})
export class MfaRegistrationFormComponent implements OnInit {
  mfaConfigurationForm: FormGroup;
  mfaData: IMfaConfiguration | undefined;
  isConfiguringMFA: boolean = false;

  constructor(
    private toastMessageService: ToastMessageService,
    private constantService: ConstantService
  ) {
    this.mfaConfigurationForm = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  ngOnInit() {
    this.initMFA();
  }

  initMFA() {
    // TODO: Add API to get initial data of configured factor, or qr code to allow registring MFA.
    this.mfaData = {
      ...this.constantService.testMFAData,
      isConfigured: true
    };

    if (this.mfaData?.qrImageData && !this.mfaData?.isConfigured) {
      this.isConfiguringMFA = true;
    }
  }

  editMFA() {
    this.isConfiguringMFA = true;
  }

  onSubmitMFAConfigurationForm() {
    if (this.mfaConfigurationForm.invalid) {
      this.mfaConfigurationForm.markAllAsTouched();
      return;
    }

    this.toastMessageService.showSuccessMessage(
      'MFA configured successfully!',
      'MFA Configuration'
    );
    // TODO: Add configure authenticator app API
    let response: IMfaConfiguration = {
      ...this.constantService.testMFAData,
      isConfigured: true,
      secrets: ['12333', '45678999', '98745666'],
    };

    this.mfaData = response;
    this.isConfiguringMFA = false;
  }
}
