import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIconsModule } from '@ng-icons/core';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FormInputFieldComponent } from './components/form-input-field/form-input-field.component';

@NgModule({
  declarations: [FormErrorComponent, FormInputFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ heroEye, heroEyeSlash }),

    NgbToastModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule,
    NgbToastModule,

    FormErrorComponent,
    FormInputFieldComponent,
  ],
})
export class SharedModule {}
