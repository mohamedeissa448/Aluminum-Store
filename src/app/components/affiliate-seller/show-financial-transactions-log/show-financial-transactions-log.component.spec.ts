import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFinancialTransactionsLogComponent } from './show-financial-transactions-log.component';

describe('ShowFinancialTransactionsLogComponent', () => {
  let component: ShowFinancialTransactionsLogComponent;
  let fixture: ComponentFixture<ShowFinancialTransactionsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFinancialTransactionsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFinancialTransactionsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
