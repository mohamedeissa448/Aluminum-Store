import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminumItemsComponent } from './aluminum-items.component';

describe('AluminumItemsComponent', () => {
  let component: AluminumItemsComponent;
  let fixture: ComponentFixture<AluminumItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluminumItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminumItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
