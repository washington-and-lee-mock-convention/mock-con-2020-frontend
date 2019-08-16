import { Component } from '@angular/core';

//makes known to angular the following. Also defines
//the selector to be mapped to in index.html
@Component({
  selector: 'app-root',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  title = 'MockConvention2020';
}



