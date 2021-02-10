import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedeparmentComponent } from './updatedeparment.component';

describe('UpdatedeparmentComponent', () => {
  let component: UpdatedeparmentComponent;
  let fixture: ComponentFixture<UpdatedeparmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedeparmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedeparmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
