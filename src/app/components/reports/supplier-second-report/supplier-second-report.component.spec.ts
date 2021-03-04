import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSecondReportComponent } from './supplier-second-report.component';

describe('SupplierSecondReportComponent', () => {
  let component: SupplierSecondReportComponent;
  let fixture: ComponentFixture<SupplierSecondReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierSecondReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierSecondReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
