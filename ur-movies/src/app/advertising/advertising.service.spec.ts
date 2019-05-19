import { TestBed } from '@angular/core/testing';

import { AdvertisingService } from './advertising.service';

describe('AdvertisingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertisingService = TestBed.get(AdvertisingService);
    expect(service).toBeTruthy();
  });
});
