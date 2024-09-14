import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSocialComponent } from './app-social/app-social.component';

describe('AppSocialComponent', () => {
  let component: AppSocialComponent;
  let fixture: ComponentFixture<AppSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
