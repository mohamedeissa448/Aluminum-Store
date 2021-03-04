import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallNoteComponent } from './call-note.component';

describe('CallNoteComponent', () => {
  let component: CallNoteComponent;
  let fixture: ComponentFixture<CallNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
