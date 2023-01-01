import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatInput } from '@angular/material/input';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-form-datepicker-type',
  template: `
  <input (focus)="openPicker()" (input)="openPicker()" matInput 
  [formControl]="formControl"
  [matDatepicker]="picker">
  <mat-hint></mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
  `,
})
export class DatepickerTypeComponent extends FieldType<any> {
  // Optional: only if you want to rely on `MatInput` implementation
  @ViewChild(MatInput) formFieldControl: MatInput | undefined;
  
  @ViewChild('picker')
  datePicker!: MatDatepicker<Date>;

  openPicker(){
    console.log(this.datePicker);
    if(this.datePicker){
      this.datePicker.open();
    }
  }
}
