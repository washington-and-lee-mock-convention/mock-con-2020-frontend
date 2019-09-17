import { TestBed } from '@angular/core/testing';

import { CandidateHasvisitedService } from './candidate-hasvisited.service';

describe('CandidateHasvisitedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateHasvisitedService = TestBed.get(CandidateHasvisitedService);
    expect(service).toBeTruthy();
  });
});
