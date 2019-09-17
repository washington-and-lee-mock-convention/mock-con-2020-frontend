import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from '../api/candidate/candidate.reducer'
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  private candidate: Observable<Candidate>;

  constructor(private router: ActivatedRoute, private store: Store<{ count: number }>) { 
    if (store.pipe(select('candidate'))) {
      this.candidate = store.pipe(select('candidate'));
    }
  }

  ngOnInit() {}

  getCandidates = () => {
    // use http client to get candidates from path
  };

  getCandidate = (name: string) => {
    // use http client to get candidate from path
  };

}
