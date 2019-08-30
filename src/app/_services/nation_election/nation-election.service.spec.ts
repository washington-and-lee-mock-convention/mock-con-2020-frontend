import { TestBed } from '@angular/core/testing';

import { NationElectionService } from './nation-election.service';

describe('NationElectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NationElectionService = TestBed.get(NationElectionService);
    expect(service).toBeTruthy();
  });
});
