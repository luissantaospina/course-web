import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "./Course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + 'courses')
  }

  deleteCourse(id: string): Observable<Course> {
    return this.http.delete<Course>(this.apiUrl + 'course/' + id)
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl + 'courses', course)
  }

  updateCourse(id: string, course: Course): Observable<Course> {
    return this.http.put<Course>(this.apiUrl + 'course/' + id, course)
  }

  getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(this.apiUrl + 'course/' + id)
  }
}
