import { TestBed } from '@angular/core/testing';

import { BromoCodeService } from './bromo-code.service';

describe('BromoCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BromoCodeService = TestBed.get(BromoCodeService);
    expect(service).toBeTruthy();
  });
});
