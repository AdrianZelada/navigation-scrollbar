import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTwoTestComponent } from './content-two-test.component';

describe('ContentTwoTestComponent', () => {
  let component: ContentTwoTestComponent;
  let fixture: ComponentFixture<ContentTwoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTwoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTwoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
