import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../_services/profiles/profiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})

//git commit -m "Made Actions accessible from library.component"

export class LibraryComponent implements OnInit {
  selectedCandidate: any;
  cands = [];
  public detailedPath;
  // act: any = actions;
  constructor(private profile: ProfilesService, private router: Router) {
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

  ngOnInit() {
    // this.detailedPath = window.location.origin + "/candidate"
  }

  selectedCand(candy){
    this.profile.selectedCandidate = candy;
    this.selectedCandidate = candy;
    this.router.navigate(["/candidate"]);

  }

}
