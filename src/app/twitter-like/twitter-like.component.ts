import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-twitter-like',
  templateUrl: './twitter-like.component.html',
  styleUrls: ['./twitter-like.component.css']
})
export class TwitterLikeComponent {

  @Input('likesCount') likesCount:number;
  @Input('isLiked') isActive:boolean;

  likeOnCLick()
  {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive=!this.isActive;
  }


}
