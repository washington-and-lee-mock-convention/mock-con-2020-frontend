import { Component, OnInit } from '@angular/core';

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
  constructor(private profile: ProfilesService, private router: Router) { 
    //get candidates from server
   profile.getAll().subscribe(res => {
    //load candidates into array
    for(let i of res){
      this.cands.push(i);
    }
   });

  }

  ngOnInit() {
  }

  selectedCand(candy){
    this.profile.selectedCandidate = candy;
    this.selectedCandidate = candy;
    this.router.navigate(["/candidate"]);

  }

}
