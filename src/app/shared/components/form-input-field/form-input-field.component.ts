import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroupDirective,
} from '@angular/forms';
import { FormInputFieldTypeEnum } from '../../../enums/form-input-field-type.enum';

@Component({
  selector: 'form-input-field',
  template: `
    <div [class.mb-3]="icon || type == formInputFieldTypeEnum.CHECKBOX">
      <div [class.input-group]="icon != ''">
        <div
          [ngClass]="{
            'form-check': type == formInputFieldTypeEnum.CHECKBOX,
            'form-floating': type != formInputFieldTypeEnum.CHECKBOX,
            'mb-3': !icon && type != formInputFieldTypeEnum.CHECKBOX
          }"
        >
          <input
            [formControlName]="controlName"
            [id]="controlName"
            [name]="controlName"
            [ngClass]="
              type == formInputFieldTypeEnum.CHECKBOX
                ? 'form-check-input'
                : 'form-control'
            "
            [type]="type"
            [placeholder]="label || controlName"
            [class.is-invalid]="control?.invalid && control?.touched"
            (change)="onCheckboxChange($event)"
          />
          <label [for]="controlName" class="form-label">
            {{ label }}
            <ng-content select=".labelCustomText"></ng-content>
          </label>
          <form-error *ngIf="!icon" [control]="control"></form-error>
        </div>
        <span
          *ngIf="icon"
          class="input-group-text"
          [ngClass]="{ 'icon-hover pe-auto': canClickIcon }"
          (click)="canClickIcon && iconClicked($event)"
        >
          <ng-icon [name]="icon" size="1.4em"></ng-icon>
        </span>
      </div>
      <form-error *ngIf="icon" [control]="control"></form-error>
    </div>
  `,
  styles: [
    `
      .icon-hover:not(disabled):hover {
        opacity: 0.8;
        cursor: pointer;
      }
    `,
  ],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class FormInputFieldComponent {
  @Input() label: string = '';
  @Input() type: string = FormInputFieldTypeEnum.TEXT;
  @Input() icon: string = '';
  @Input() canClickIcon: boolean = false;
  @Input() control: AbstractControl | null | undefined;
  @Input() controlName: string = `inputField${Math.floor(
    Math.random() * (100 - 1 + 1) + 1
  )}`;

  @Output() inputIconClick: EventEmitter<any> = new EventEmitter<any>();

  formInputFieldTypeEnum = FormInputFieldTypeEnum;

  iconClicked(ev: any) {
    this.inputIconClick.emit(ev);
  }

  onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (this.control && this.type == this.formInputFieldTypeEnum.CHECKBOX) {
      this.control.setValue(input.checked);
    }
  }
}
