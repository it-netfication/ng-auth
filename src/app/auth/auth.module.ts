import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginMfaFormComponent } from './login-mfa-form/login-mfa-form.component';

@NgModule({
  declarations: [
    SignupFormComponent,
    LoginFormComponent,
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent,
    LoginMfaFormComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
