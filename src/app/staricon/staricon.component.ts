import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'staricon',
  templateUrl: './staricon.component.html',
  styleUrls: ['./staricon.component.css'],
 })
export class StariconComponent implements OnInit {

  @Input() isFavorite:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  marked()
  {
      this.isFavorite=!this.isFavorite;
  }

}
