import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from '../api/candidate/candidate.reducer'
import { ProfilesService } from '../_services/profiles/profiles.service'
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getCandidate, getCandidates } from '../api/candidate/candidate.actions'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
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
      this.candidates$ = store.pipe(select('candidate'));
    } else {
      this.getCandidates()
    }
  }

}
