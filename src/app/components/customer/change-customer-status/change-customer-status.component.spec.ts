import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCustomerStatusComponent } from './change-customer-status.component';

describe('ChangeCustomerStatusComponent', () => {
  let component: ChangeCustomerStatusComponent;
  let fixture: ComponentFixture<ChangeCustomerStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCustomerStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCustomerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
