import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../_services/profiles/profiles.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  candidate: any;

  constructor(private router: ActivatedRoute, private profile: ProfilesService) { 
    this.router.params.subscribe(res =>{
      if(this.profile.selectedCandidate){
        this.candidate = this.profile.selectedCandidate;
        console.log(this.candidate);
      }
      else{
        this.candidate = {firstName: "reroute to library page and reselect"}
      }
    })
  }
  ngOnInit() {
  }

}
