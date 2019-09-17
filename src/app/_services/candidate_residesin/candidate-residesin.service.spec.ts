import { TestBed } from '@angular/core/testing';

import { CandidateResidesinService } from './candidate-residesin.service';

describe('CandidateResidesinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateResidesinService = TestBed.get(CandidateResidesinService);
    expect(service).toBeTruthy();
  });
});
