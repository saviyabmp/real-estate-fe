import { TestBed } from '@angular/core/testing';

import { LandAdService } from './land-ad.service';

describe('LandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandAdService = TestBed.get(LandAdService);
    expect(service).toBeTruthy();
  });
});
