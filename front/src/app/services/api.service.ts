import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {CourseModel} from 'src/app/models/course.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  post(endpoint:string,obj:object){
    //return {courseTitle:'course4',courseDate:'11/11/11',cost:25,isActive:false};
    return this.http.post<Array<CourseModel>>(`${endpoint}`,obj)
  }

  get(endpoint : string ,obj? : HttpParams ){
    return this.http.get<Array<CourseModel>>(`${endpoint}`,{params:obj})
  }

  delete(endpoint : string,obj : object){
    return this.http.delete(`${environment.ApiRequest}${endpoint}`,obj)
  }


}
