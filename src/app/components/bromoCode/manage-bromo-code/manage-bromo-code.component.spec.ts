import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBromoCodeComponent } from './manage-bromo-code.component';

describe('ManageBromoCodeComponent', () => {
  let component: ManageBromoCodeComponent;
  let fixture: ComponentFixture<ManageBromoCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBromoCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBromoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
