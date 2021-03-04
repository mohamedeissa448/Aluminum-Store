import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateSellerSecondReportComponent } from './affiliate-seller-second-report.component';

describe('AffiliateSellerSecondReportComponent', () => {
  let component: AffiliateSellerSecondReportComponent;
  let fixture: ComponentFixture<AffiliateSellerSecondReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateSellerSecondReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateSellerSecondReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
