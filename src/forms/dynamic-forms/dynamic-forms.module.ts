import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form-input.component';
import { InputControlService } from '../input-control.service';
import { DynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';
import { DynamicFormSelectComponent } from './dynamic-form-select.component';
import { DynamicFormRadioComponent } from './dynamic-form-radio.component';
import { DynamicFormTextAreaComponent } from './dynamic-form-textarea.component';
import { ButtonsModule } from '../../buttons/buttons.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule
  ],
  exports: [
    ReactiveFormsModule,
    DynamicFormComponent,
    DynamicFormInputComponent,
    DynamicFormSelectComponent,
    DynamicFormCheckboxComponent,
    DynamicFormRadioComponent,
    DynamicFormTextAreaComponent
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFormInputComponent,
    DynamicFormSelectComponent,
    DynamicFormCheckboxComponent,
    DynamicFormRadioComponent,
    DynamicFormTextAreaComponent
  ],
  providers: [
    InputControlService
  ],
})
export class DynamicFormsModule { }
