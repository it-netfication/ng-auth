# Ng-Auth-UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Auth Module

The Auth Module is designed to handle user Authentication and Authorization in an Angular application. It includes various components and services that manage user sign-up, login, password reset, and session handling.

## Components

### 1- Signup Form Component

**Purpose:** Facilitates user registration by capturing key data, including name, email, phone and password.
**Validation:** Implements form validation using bootsrap to ensure correct input, displaying error messages or invalid fields.
**Flow:** Upon successful registration, the user is automatically redirected to the login page.

### 2- Login Form Component

**Purpose:** Manages user authentication by accepting email and password.
**MFA Support:** If Multi-Factor Authentication (MFA) is enabled, users will be prompted for a verification code after submitting their credentials.
**Validation:** Bootstrap handles basic validation, displaying error for invalid inputs.
**Forgot Password:** A Forgot Password link is provided to reset the user's password if they cannot log in.

### 3- Reset Password Form Component

**Purpose:** Allows users to reset their password by entering a new password and confirming it.
**Validation:** Both password and confirm password fields are validated to ensure they mathc and meet security criteria.

## Routes
The Auth Module provide the following routes:
- **/signup:** Route for the SignupFormComponent, allowing users to register for a new account.
- **/login:** Route for the LoginFormComponent, enabling users to login with their credentials.
- **/reset-password:** Route for the ResetPasswordFormComponent, allowing users to reset their password.

## Features

- **Form Validation:** Bootsrap -based validation for all input fields across components.
- **MFA Support:** Multi-Factor Authnetication integration to enhance security.
- **Error Handling:** User-firendly error messages displayed for invalid form submissions and authentication failures.
- **Password Resrt:** A full flow for password recovery, including email verification and resetting the password.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
