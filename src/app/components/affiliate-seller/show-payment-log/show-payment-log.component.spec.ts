import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPaymentLogComponent } from './show-payment-log.component';

describe('ShowPaymentLogComponent', () => {
  let component: ShowPaymentLogComponent;
  let fixture: ComponentFixture<ShowPaymentLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPaymentLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPaymentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
