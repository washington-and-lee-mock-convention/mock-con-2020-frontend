import { TestBed } from '@angular/core/testing';

import { Precinct.ServiceService } from './precinct.service.service';

describe('Precinct.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Precinct.ServiceService = TestBed.get(Precinct.ServiceService);
    expect(service).toBeTruthy();
  });
});
