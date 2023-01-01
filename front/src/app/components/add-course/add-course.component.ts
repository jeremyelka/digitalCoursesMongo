import { Component, ElementRef, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { EventEmitter } from '@angular/core';
import {CourseModel} from 'src/app/models/course.model';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddCourseComponent{

@Output() eventToParent = new EventEmitter();

courseModel? : CourseModel;
courseForm = new FormGroup({});
coursefields: FormlyFieldConfig[]= [
  {
    key: 'courseTitle',
    type: 'input',
    className: 'margin-10',
    props: {
      label:'Course Title',
      placeholder: 'Course Title',
      required: true,
    },
  },
  {
    key: 'courseDate',
    type: 'datepicker',
    className: 'margin-10 nobutton',
    props: {
      label:'Course Date',
      placeholder: 'Course Date',
      required: true,
    }
  },
  {
    key: 'cost',
    type: 'number',
    className: 'margin-10',
    props: {
      label:'Cost',
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


}
