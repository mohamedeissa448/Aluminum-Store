import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerThirdReportComponent } from './customer-third-report.component';

describe('CustomerThirdReportComponent', () => {
  let component: CustomerThirdReportComponent;
  let fixture: ComponentFixture<CustomerThirdReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerThirdReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerThirdReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
