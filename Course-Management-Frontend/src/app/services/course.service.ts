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

  getCourseById(id: number) {
    return this.http.get(`${this.baseURL}/api/course/${id}`);
  }

  addCourse(courseInfo: any) {
    return this.http.post(`${this.baseURL}/api/course/add`, courseInfo);
  }

  updateCourse(id: number, courseInfo: any) {
    return this.http.post(
      `${this.baseURL}/api/course/update/${id}`,
      courseInfo
    );
  }

  deleteCourse(id: number) {
    return this.http.delete(`${this.baseURL}/api/course/delete/${id}`);
  }
}
