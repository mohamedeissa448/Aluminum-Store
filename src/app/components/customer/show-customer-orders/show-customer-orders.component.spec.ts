import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomerOrdersComponent } from './show-customer-orders.component';

describe('ShowCustomerOrdersComponent', () => {
  let component: ShowCustomerOrdersComponent;
  let fixture: ComponentFixture<ShowCustomerOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCustomerOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustomerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
