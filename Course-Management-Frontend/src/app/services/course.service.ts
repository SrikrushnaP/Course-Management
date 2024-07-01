import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseURL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(`${this.baseURL}/api/course`);
  }

  addCourse(courseInfo: any) {
    return this.http.post(`${this.baseURL}/api/course/add`, courseInfo);
  }

}
