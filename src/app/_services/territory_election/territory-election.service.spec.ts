import { TestBed } from '@angular/core/testing';

import { TerritoryElectionService } from './territory-election.service';

describe('TerritoryElectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerritoryElectionService = TestBed.get(TerritoryElectionService);
    expect(service).toBeTruthy();
  });
});
