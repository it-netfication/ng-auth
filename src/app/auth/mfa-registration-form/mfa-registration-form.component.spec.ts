import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaRegistrationFormComponent } from './mfa-registration-form.component';

describe('MfaRegistrationFormComponent', () => {
  let component: MfaRegistrationFormComponent;
  let fixture: ComponentFixture<MfaRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MfaRegistrationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MfaRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
