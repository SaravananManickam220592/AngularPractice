import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormexmplComponent } from './formexmpl.component';

describe('FormexmplComponent', () => {
  let component: FormexmplComponent;
  let fixture: ComponentFixture<FormexmplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormexmplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormexmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
