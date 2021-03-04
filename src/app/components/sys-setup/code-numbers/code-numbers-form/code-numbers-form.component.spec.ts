import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeNumberFormComponent } from './code-numbers-form.component';

describe('CodeNumberFormComponent', () => {
  let component: CodeNumberFormComponent;
  let fixture: ComponentFixture<CodeNumberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeNumberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
