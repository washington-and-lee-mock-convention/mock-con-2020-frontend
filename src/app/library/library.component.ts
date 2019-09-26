import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from '../api/candidate/candidate.reducer'
import { ProfilesService } from '../_services/profiles/profiles.service'
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getCandidate, getCandidates } from '../api/candidate/candidate.actions'
import { map } from 'rxjs/operators';
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
  candidates$: Observable<any> = this.store.select(state => state.candidates);

  ngOnInit() {
  }

  private getCandidateFromJSON(json: Observable<any>) {
    Object.entries(json).forEach(keyValue => {
      console.log(keyValue)
    })
  } 

  getCandidate = (name: string) => {
    // use http client to get candidate from path
    var candidate: Observable<any>  = this.profileService.get(name);
    this.getCandidateFromJSON(candidate);
  };

  getCandidates = () => {
    // use http client to get candidates from path
    var candidates: Observable<any> = this.profileService.getAll();
    var candidates_list = candidates.pipe(
      map((candidate) => this.getCandidateFromJSON(candidate))
    );
    return candidates_list;
  };

  constructor(
    
    private store: Store<{ candidates: Candidate[] }>,
    private profileService: ProfilesService
  ) { 

    if (store.pipe(select('candidate'))) {
      console.log("success");
      this.candidates$ = store.pipe(select('candidate'));
      console.log(this.candidates$);
    } else {
      console.log("what")
      this.getCandidates()
    }
  }


  // constructor(private profile: ProfilesService, private router: Router) {
    
    
  //   //get candidates from server
  //   // profile.get().subscribe(
  //   //   res => {
  //   //     //load candidates into array
  //   //     for(let i of res){
  //   //       console.log(i);
  //   //       if(i.firstName != null){
  //   //         this.cands.push(i);
  //   //       }
  //   //   }
  //   //   },
  //   //   error =>{
  //   //     console.log("The server is offline");
  //   //   });

  // }

  // ngOnInit() {
  //   // this.detailedPath = window.location.origin + "/candidate"
  // }

  // selectedCand(candy){
  //   this.profile.selectedCandidate = candy;
  //   this.selectedCandidate = candy;
  //   this.router.navigate(["/candidate"]);

  // }

}
