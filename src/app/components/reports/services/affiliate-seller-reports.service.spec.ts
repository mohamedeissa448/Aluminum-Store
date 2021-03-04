import { TestBed } from '@angular/core/testing';

import { AffiliateSellerReportsService } from './affiliate-seller-reports.service';

describe('AffiliateSellerReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffiliateSellerReportsService = TestBed.get(AffiliateSellerReportsService);
    expect(service).toBeTruthy();
  });
});
