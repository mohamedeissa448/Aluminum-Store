import { TestBed } from '@angular/core/testing';

import { AluminumItemsService } from './aluminum-items.service';

describe('AluminumItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AluminumItemsService = TestBed.get(AluminumItemsService);
    expect(service).toBeTruthy();
  });
});
