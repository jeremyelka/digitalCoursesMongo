import { Component, ElementRef, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { EventEmitter } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import {CourseModel} from 'src/app/models/course.model';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddCourseComponent{

@Output() eventToParent = new EventEmitter();

dateValidator(control: FormControl) {
  return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(control.value) ? null : { 'courseDate': true };
}

courseModel? : CourseModel;
courseForm = new FormGroup({});
coursefields: FormlyFieldConfig[]= [
  {
    key: 'courseTitle',
    type: 'input',
    className: 'margin-10',
    props: {
      placeholder: 'Course Title',
      required: true,
    },
  },
  {
    key: 'courseDate',
    type: 'datepicker',
    className: 'margin-10',
    props: {
      placeholder: 'Course Date',
      required: true,
    },
  },
  {
    key: 'cost',
    type: 'number',
    className: 'margin-10',
    props: {
      placeholder: 'Cost',
      required: true,
    },
  },
  {
    key: 'isActive',
    type: 'checkbox',
    defaultValue: false,
    className: 'margin-10 no-border',
    props: {
      label: 'Active',
    },
  },
]

@ViewChild('picker')
datePicker!: MatDatepicker<Date>;

constructor(private apiService:ApiService){}

onSubmit(){
  if(this.courseForm.valid){
    this.apiService.post('/api/course/add',this.courseForm.value).subscribe((res)=>{
      if(res){
        this.eventToParent.emit(res);
        this.courseForm.reset();
      }
    });
  }
}

openPicker(){
  console.log(this.datePicker);
  if(this.datePicker){
    this.datePicker.open();
  }
}


}
