import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateSellerReportOneComponent } from './affiliate-seller-report-one.component';

describe('AffiliateSellerReportOneComponent', () => {
  let component: AffiliateSellerReportOneComponent;
  let fixture: ComponentFixture<AffiliateSellerReportOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateSellerReportOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateSellerReportOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
