import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierThirdReportComponent } from './supplier-third-report.component';

describe('SupplierThirdReportComponent', () => {
  let component: SupplierThirdReportComponent;
  let fixture: ComponentFixture<SupplierThirdReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierThirdReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierThirdReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
