import { Component } from '@angular/core';

//makes known to angular the following. Also defines
//the selector to be mapped to in index.html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MockConvention2020';
}


