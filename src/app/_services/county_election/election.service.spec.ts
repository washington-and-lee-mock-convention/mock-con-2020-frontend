import { TestBed } from '@angular/core/testing';

import { CountyElectionService } from './county_election.service';

describe('ElectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountyElectionService = TestBed.get(CountyElectionService);
    expect(service).toBeTruthy();
  });
});
