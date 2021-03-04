import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFourthReportComponent } from './supplier-fourth-report.component';

describe('SupplierFourthReportComponent', () => {
  let component: SupplierFourthReportComponent;
  let fixture: ComponentFixture<SupplierFourthReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierFourthReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierFourthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
