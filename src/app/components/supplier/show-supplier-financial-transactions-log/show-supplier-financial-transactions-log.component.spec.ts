import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSupplierFinancialTransactionsLogComponent } from './show-supplier-financial-transactions-log.component';

describe('ShowSupplierFinancialTransactionsLogComponent', () => {
  let component: ShowSupplierFinancialTransactionsLogComponent;
  let fixture: ComponentFixture<ShowSupplierFinancialTransactionsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSupplierFinancialTransactionsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSupplierFinancialTransactionsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
