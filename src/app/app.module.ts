import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CourseCreateComponent } from './components/course/course-create/course-create.component';
import { CourseUpdateComponent } from './components/course/course-update/course-update.component';
import { CourseDeleteComponent } from './components/course/course-delete/course-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseCreateComponent,
    CourseUpdateComponent,
    CourseDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
