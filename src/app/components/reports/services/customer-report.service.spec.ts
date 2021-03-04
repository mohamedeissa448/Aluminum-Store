import { TestBed } from '@angular/core/testing';

import { CustomerReportService } from './customer-report.service';

describe('CustomerReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerReportService = TestBed.get(CustomerReportService);
    expect(service).toBeTruthy();
  });
});
