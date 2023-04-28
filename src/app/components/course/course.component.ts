import { Component, OnInit } from '@angular/core';
import {Course} from "./Course";
import {CourseService} from "./course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit {

  constructor(
    private courseService: CourseService
  ) { }

  courses: Array<Course> = []
  deleteModalActive: boolean = false
  createModalActive: boolean = false
  updateModalActive: boolean = false
  selectedCourse: any

  confirmDeletion(value: boolean) {
    if (value) this.deleteCourse(this.selectedCourse)
    this.deleteModalActive = false
  }

  confirmCreation() {
    this.getCoursesList()
    this.createModalActive = false
  }

  confirmUpdate() {
    this.getCoursesList()
    this.updateModalActive = false
  }

  deleteCourse(courseId: string): void {
    this.courseService.deleteCourse(courseId).subscribe(() => {
      this.getCoursesList()
    })
  }

  getCoursesList(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses
    })
  }

  ngOnInit(): void {
    this.getCoursesList()
  }
}
