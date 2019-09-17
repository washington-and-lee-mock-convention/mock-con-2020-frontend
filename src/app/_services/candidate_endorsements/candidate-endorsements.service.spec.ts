import { TestBed } from '@angular/core/testing';

import { CandidateEndorsementsService } from './candidate-endorsements.service';

describe('CandidateEndorsementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateEndorsementsService = TestBed.get(CandidateEndorsementsService);
    expect(service).toBeTruthy();
  });
});
