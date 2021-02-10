import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeparmentComponent } from './adddeparment.component';

describe('AdddeparmentComponent', () => {
  let component: AdddeparmentComponent;
  let fixture: ComponentFixture<AdddeparmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeparmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeparmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
