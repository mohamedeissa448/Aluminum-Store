import { TestBed } from '@angular/core/testing';

import { CategoryTypesService } from './category-types.service';

describe('CategoryTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryTypesService = TestBed.get(CategoryTypesService);
    expect(service).toBeTruthy();
  });
});
