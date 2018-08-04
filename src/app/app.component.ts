import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String;

  post={
    title:"title",
    isFavorite: true
  }

  tweet={
    body : '...',
    likesCount : 10,
    isLiked : true
  }
}
