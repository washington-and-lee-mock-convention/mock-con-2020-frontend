import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../store';
import { FETCH_CANDIDATES } from '../constants';
import { ProfilesService } from '../_services/profiles/profiles.service';
import { Router } from '@angular/router';
import {Actions}  from '../actions';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})

//git commit -m "Made Actions accessible from library.component"

export class LibraryComponent implements OnInit {
  selectedCandidate: any;
  cands = [];
  // act: any = actions;
  constructor(private actions: Actions, private ngRedux: NgRedux<AppState>,private profile: ProfilesService, private router: Router) {
    this.testingRedux();
    //get candidates from server
    profile.get().subscribe(
      res => {
        //load candidates into array
        for(let i of res){
          console.log(i);
          if(i.firstName != null){
            this.cands.push(i);
          }
      }
      },
      error =>{
        console.log("The server is offline");
      });

  }

  testingRedux(){
    console.log("testing redux");
    console.log(this.actions.getRequests().getCandidates());
    console.log(this.getCandidates());     
    console.log("testing ended");
  }

  //reduxjs??
  getCandidates() {
    return this.ngRedux.dispatch({type: FETCH_CANDIDATES});
  }

  ngOnInit() {
  }

  selectedCand(candy){
    this.profile.selectedCandidate = candy;
    this.selectedCandidate = candy;
    this.router.navigate(["/candidate"]);

  }

}
