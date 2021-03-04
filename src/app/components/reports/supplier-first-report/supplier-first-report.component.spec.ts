import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFirstReportComponent } from './supplier-first-report.component';

describe('SupplierFirstReportComponent', () => {
  let component: SupplierFirstReportComponent;
  let fixture: ComponentFixture<SupplierFirstReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierFirstReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierFirstReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
