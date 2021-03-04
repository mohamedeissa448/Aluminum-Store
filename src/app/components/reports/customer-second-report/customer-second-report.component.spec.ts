import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSecondReportComponent } from './customer-second-report.component';

describe('CustomerSecondReportComponent', () => {
  let component: CustomerSecondReportComponent;
  let fixture: ComponentFixture<CustomerSecondReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSecondReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSecondReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
