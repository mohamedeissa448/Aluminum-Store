import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFirstReportComponent } from './customer-first-report.component';

describe('CustomerFirstReportComponent', () => {
  let component: CustomerFirstReportComponent;
  let fixture: ComponentFixture<CustomerFirstReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFirstReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFirstReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
