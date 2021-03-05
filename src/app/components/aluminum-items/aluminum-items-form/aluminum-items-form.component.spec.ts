import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminumItemsFormComponent } from './aluminum-items-form.component';

describe('AluminumItemsFormComponent', () => {
  let component: AluminumItemsFormComponent;
  let fixture: ComponentFixture<AluminumItemsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluminumItemsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminumItemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
