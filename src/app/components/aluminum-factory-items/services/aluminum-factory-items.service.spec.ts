import { TestBed } from '@angular/core/testing';

import { AluminumFactoryItemsService } from './aluminum-factory-items.service';

describe('AluminumFactoryItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AluminumFactoryItemsService = TestBed.get(AluminumFactoryItemsService);
    expect(service).toBeTruthy();
  });
});
