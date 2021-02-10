import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdeparmentsComponent } from './showdeparments.component';

describe('ShowdeparmentsComponent', () => {
  let component: ShowdeparmentsComponent;
  let fixture: ComponentFixture<ShowdeparmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdeparmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdeparmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
