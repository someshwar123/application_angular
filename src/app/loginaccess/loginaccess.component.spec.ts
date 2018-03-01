import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginaccessComponent } from './loginaccess.component';

describe('LoginaccessComponent', () => {
  let component: LoginaccessComponent;
  let fixture: ComponentFixture<LoginaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
