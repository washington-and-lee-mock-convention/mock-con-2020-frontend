import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../store';
import { FETCH_CANDIDATES } from '../constants';
import { ProfilesService } from '../_services/profiles/profiles.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})


export class LibraryComponent implements OnInit {
  selectedCandidate: any;
  cands = [];
  constructor(private ngRedux: NgRedux<AppState>,private profile: ProfilesService, private router: Router) {     
    //get candidates from server
    profile.get().subscribe(
      res => {
        //load candidates into array
        for(let i of res){
          console.log(i);
          this.cands.push(i);
      }
      },
      error =>{
        console.log("The server is offline");
      });

  }

  getCandidates() {
    this.ngRedux.dispatch({type: FETCH_CANDIDATES});
  }

  ngOnInit() {
  }

  selectedCand(candy){
    this.profile.selectedCandidate = candy;
    this.selectedCandidate = candy;
    this.router.navigate(["/candidate"]);

  }

}
