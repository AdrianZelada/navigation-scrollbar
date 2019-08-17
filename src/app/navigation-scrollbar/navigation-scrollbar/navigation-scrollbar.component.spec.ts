import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationScrollbarComponent } from './navigation-scrollbar.component';

describe('NavigationScrollbarComponent', () => {
  let component: NavigationScrollbarComponent;
  let fixture: ComponentFixture<NavigationScrollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationScrollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
