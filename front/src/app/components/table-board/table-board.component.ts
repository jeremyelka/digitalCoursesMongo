import { Component, ViewEncapsulation } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {CourseModel} from 'src/app/models/course.model';

@Component({
  selector: 'app-table-board',
  templateUrl: './table-board.component.html',
  styleUrls: ['./table-board.component.scss']
})
export class TableBoardComponent {
  addCourseShow : boolean = false;
  searchText: string = '';
  alldata : CourseModel[]= []
  keys :any = [];
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.apiService.get('/api/course/all').subscribe((res : CourseModel[])=>{
      console.log(res);
      this.getKeys(res);
      this.alldata=res;
    })
  }

  getKeys(data:CourseModel[]){
    console.log(this.alldata);
    data.forEach((element) => {
      console.log(Object.keys(element))
      this.keys = Object.keys(element)?.length > this.keys?.length ? Object.keys(element) : this.keys;
    });
    this.keys=this.keys.slice(1)
    console.log(this.keys);
  }

  toggleOpen(){
    this.addCourseShow=!this.addCourseShow;
  }

  getEventFromChild(event: CourseModel){
    this.alldata.push(event);
  }

}
