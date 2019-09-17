import { TestBed } from '@angular/core/testing';

import { CandidateBorninService } from './candidate-bornin.service';

describe('CandidateBorninService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateBorninService = TestBed.get(CandidateBorninService);
    expect(service).toBeTruthy();
  });
});
