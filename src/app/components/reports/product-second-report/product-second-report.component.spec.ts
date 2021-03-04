import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSecondReportComponent } from './product-second-report.component';

describe('ProductSecondReportComponent', () => {
  let component: ProductSecondReportComponent;
  let fixture: ComponentFixture<ProductSecondReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSecondReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSecondReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
