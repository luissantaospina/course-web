import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../Course";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html'
})
export class CourseUpdateComponent implements OnInit {
  @Input() courseId: string = ''
  @Output() confirmUpdate = new EventEmitter<boolean>()

  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) { }

  course: any
  courseSave: any
  updateCourseForm!: FormGroup

  emitConfirmUpdate(wasUpdated: boolean) {
    this.confirmUpdate.emit(wasUpdated)
  }

  ngOnInit(): void {
    this.getCourse(this.courseId)
    this.updateCourseForm = this.formBuilder.group({
      name: ["", Validators.required],
      start_date: ["", Validators.required],
      end_date: ["", Validators.required]
    })
  }

  getCourse(id: string): void {
    this.courseService.getCourse(id).subscribe(course => {
      this.courseSave = course
      this.updateCourseForm = this.formBuilder.group({
        name: [this.courseSave.name, Validators.required],
        start_date: [this.courseSave.start_date, Validators.required],
        end_date: [this.courseSave.end_date, Validators.required]
      })
    })
  }

  updateCourse(course: Course) {
    this.courseService.updateCourse(this.courseId, course).subscribe(() => {
      this.updateCourseForm.reset()
      this.emitConfirmUpdate(false)
    })
  }
}
