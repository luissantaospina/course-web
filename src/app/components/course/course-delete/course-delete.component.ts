import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html'
})
export class CourseDeleteComponent implements OnInit {
  @Input() modalTitle: string = ''
  @Output() confirmDeletion = new EventEmitter<boolean>()

  constructor() { }

  emitConfirmDeletion(value: boolean) {
    this.confirmDeletion.emit(value)
  }

  ngOnInit(): void {
  }
}
