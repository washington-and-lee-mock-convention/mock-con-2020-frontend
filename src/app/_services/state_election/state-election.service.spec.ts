import { TestBed } from '@angular/core/testing';

import { StateElectionService } from './state-election.service';

describe('StateElectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateElectionService = TestBed.get(StateElectionService);
    expect(service).toBeTruthy();
  });
});
