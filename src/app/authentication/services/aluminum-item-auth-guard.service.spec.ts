import { TestBed } from '@angular/core/testing';

import { ManageAluminumItemAuthGuardService } from './aluminum-item-auth-guard.service';

describe('ManageAluminumItemAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageAluminumItemAuthGuardService = TestBed.get(ManageAluminumItemAuthGuardService);
    expect(service).toBeTruthy();
  });
});
