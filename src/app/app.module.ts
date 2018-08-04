import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoursesComponent} from './courses.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StariconComponent } from './staricon/staricon.component';
import { TitleCasePipe } from './title-case.pipe';
import { TwitterLikeComponent } from './twitter-like/twitter-like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FormexmplComponent } from './formexmpl/formexmpl.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent, CourseComponent,
    SummaryPipe,
    StariconComponent,
    TitleCasePipe,
    TwitterLikeComponent,
    ZippyComponent,
    FormexmplComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
