import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditComponent } from './expedit.component';

describe('ExpeditComponent', () => {
  let component: ExpeditComponent;
  let fixture: ComponentFixture<ExpeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
