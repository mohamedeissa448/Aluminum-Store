import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThirdReportComponent } from './product-third-report.component';

describe('ProductThirdReportComponent', () => {
  let component: ProductThirdReportComponent;
  let fixture: ComponentFixture<ProductThirdReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductThirdReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductThirdReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
