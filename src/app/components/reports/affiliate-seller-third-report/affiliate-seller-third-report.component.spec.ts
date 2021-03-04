import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateSellerThirdReportComponent } from './affiliate-seller-third-report.component';

describe('AffiliateSellerThirdReportComponent', () => {
  let component: AffiliateSellerThirdReportComponent;
  let fixture: ComponentFixture<AffiliateSellerThirdReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateSellerThirdReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateSellerThirdReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
