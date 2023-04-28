import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../course.service";
import {Course} from "../Course";

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html'
})
export class CourseCreateComponent implements OnInit {
  @Output() confirmCreation = new EventEmitter<boolean>()

  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) { }

  createCourseForm!: FormGroup

  emitConfirmCreation(wasCreated: boolean) {
    this.confirmCreation.emit(wasCreated)
  }

  ngOnInit(): void {
    this.createCourseForm = this.formBuilder.group({
      name: ["", Validators.required],
      start_date: ["", Validators.required],
      end_date: ["", Validators.required]
    })
  }

  createCourse(course: Course) {
    this.courseService.createCourse(course).subscribe(() => {
      this.createCourseForm.reset()
      this.emitConfirmCreation(true)
    })
  }
}
