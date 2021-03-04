import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFirstReportComponent } from './employee-first-report.component';

describe('EmployeeFirstReportComponent', () => {
  let component: EmployeeFirstReportComponent;
  let fixture: ComponentFixture<EmployeeFirstReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFirstReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFirstReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
