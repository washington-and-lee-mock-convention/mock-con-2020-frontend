import { TestBed } from '@angular/core/testing';

import { CandidateElectionService } from './candidate-election.service';

describe('CandidateElectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateElectionService = TestBed.get(CandidateElectionService);
    expect(service).toBeTruthy();
  });
});
