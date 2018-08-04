import { CoursesService } from './courses.service';
import {Component} from '@angular/core';


@Component({
    selector : 'courses',
    template : `<h1>{{ title }}</h1>
                <ul>
                <li *ngFor="let course of courses">
                {{ course }}
                </li>
                </ul>

                {{title | summary }}

                <button class="btn btn-primary" (click)="buttonClickFn($event)">save</button>
    `
})

export class CoursesComponent
{
    title="List of Courses";

    text =`Copy the crack folder content and paste it to the software installed directory.
    Copy the crack folder content and paste it to the software installed directory.
    Copy the crack folder content and paste it to the software installed directory.`;
    courses;

    constructor(service:CoursesService){
       this.courses=service.getCourses();
    }

    buttonClickFn($event)
    {
        console.log("Button Clicked ",$event);
    }
}