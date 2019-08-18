import { TestBed } from '@angular/core/testing';

import { NavigationTwoService } from './navigation-two.service';

describe('NavigationTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationTwoService = TestBed.get(NavigationTwoService);
    expect(service).toBeTruthy();
  });
});
