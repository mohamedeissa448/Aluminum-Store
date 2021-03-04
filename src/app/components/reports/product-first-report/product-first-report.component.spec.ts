import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFirstReportComponent } from './product-first-report.component';

describe('ProductFirstReportComponent', () => {
  let component: ProductFirstReportComponent;
  let fixture: ComponentFixture<ProductFirstReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFirstReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFirstReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
