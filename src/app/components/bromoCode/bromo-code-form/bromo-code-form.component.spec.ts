import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BromoCodeFormComponent } from './bromo-code-form.component';

describe('BromoCodeFormComponent', () => {
  let component: BromoCodeFormComponent;
  let fixture: ComponentFixture<BromoCodeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BromoCodeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BromoCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
