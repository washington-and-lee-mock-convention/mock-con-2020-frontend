import { Component, Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

//makes known to angular the following. Also defines
//the selector to be mapped to in index.html
@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'MockConvention2020';
}

// @Injectable()

// class MockConData {
//   getData() {
//     //return this.http.get("")
//     return null;
//   }
// }
