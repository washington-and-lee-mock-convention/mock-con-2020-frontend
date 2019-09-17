import { TestBed } from '@angular/core/testing';

import { PrecinctService } from './precinct.service';

describe('Precinct.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrecinctService = TestBed.get(PrecinctService);
    expect(service).toBeTruthy();
  });
});
