import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeNumberComponent } from './code-numbers.component';

describe('CodeNumberComponent', () => {
  let component: CodeNumberComponent;
  let fixture: ComponentFixture<CodeNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
