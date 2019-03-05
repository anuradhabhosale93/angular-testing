import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgnavComponent } from './ngnav.component';

describe('NgnavComponent', () => {
  let component: NgnavComponent;
  let fixture: ComponentFixture<NgnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
