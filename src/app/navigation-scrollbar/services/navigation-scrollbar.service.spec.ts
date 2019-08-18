import { TestBed } from '@angular/core/testing';

import { NavigationScrollbarService } from './navigation-scrollbar.service';

describe('NavigationScrollbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationScrollbarService = TestBed.get(NavigationScrollbarService);
    expect(service).toBeTruthy();
  });
});
