import { TestBed } from '@angular/core/testing';

import { SupplierReportService } from './supplier-report.service';

describe('SupplierReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplierReportService = TestBed.get(SupplierReportService);
    expect(service).toBeTruthy();
  });
});
