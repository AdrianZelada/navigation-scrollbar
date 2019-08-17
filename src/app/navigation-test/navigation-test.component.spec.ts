import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTestComponent } from './navigation-test.component';

describe('NavigationTestComponent', () => {
  let component: NavigationTestComponent;
  let fixture: ComponentFixture<NavigationTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
