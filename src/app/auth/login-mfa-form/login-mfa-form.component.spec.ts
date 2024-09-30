import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMfaFormComponent } from './login-mfa-form.component';

describe('LoginMfaFormComponent', () => {
  let component: LoginMfaFormComponent;
  let fixture: ComponentFixture<LoginMfaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginMfaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginMfaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
