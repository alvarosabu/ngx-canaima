import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form-input.component';
import { InputControlService } from '../input-control.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    DynamicFormComponent,
    DynamicFormInputComponent,
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFormInputComponent,
  ],
  providers: [
    InputControlService
  ],
})
export class DynamicFormsModule { }
