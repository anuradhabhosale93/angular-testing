import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpdetailComponent } from './expdetail.component';

describe('ExpdetailComponent', () => {
  let component: ExpdetailComponent;
  let fixture: ComponentFixture<ExpdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
