import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formexmpl',
  templateUrl: './formexmpl.component.html',
  styleUrls: ['./formexmpl.component.css']
})
export class FormexmplComponent {

  categories=[
    { id : 1, name :'Development'},
    { id : 2, name :'Art'},
    { id : 3, name :'Science'}
  ];

  submit(course)
  {
      console.log(course);
  }

}
