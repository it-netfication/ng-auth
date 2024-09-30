import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MfaRegistrationFormComponent } from './mfa-registration-form/mfa-registration-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'forgot', component: ForgotPasswordFormComponent },
  { path: 'reset-password', component: ResetPasswordFormComponent },
  { path: 'configure-mfa', component: MfaRegistrationFormComponent },
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
