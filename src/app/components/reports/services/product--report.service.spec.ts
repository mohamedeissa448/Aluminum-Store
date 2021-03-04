import { TestBed } from '@angular/core/testing';

import { ProductReportService } from './product--report.service';

describe('ProductReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductReportService = TestBed.get(ProductReportService);
    expect(service).toBeTruthy();
  });
});
