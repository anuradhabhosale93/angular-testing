import { TestBed } from '@angular/core/testing';

import { ExpenceService } from './expence.service';

describe('ExpenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpenceService = TestBed.get(ExpenceService);
    expect(service).toBeTruthy();
  });
});
