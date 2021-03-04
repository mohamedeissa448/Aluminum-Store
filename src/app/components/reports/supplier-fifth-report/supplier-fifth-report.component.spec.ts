import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFifthReportComponent } from './supplier-fifth-report.component';

describe('SupplierFifthReportComponent', () => {
  let component: SupplierFifthReportComponent;
  let fixture: ComponentFixture<SupplierFifthReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierFifthReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierFifthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
