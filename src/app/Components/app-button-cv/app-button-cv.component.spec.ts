import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppButtonCvComponent } from './app-button-cv.component';

describe('AppButtonCvComponent', () => {
  let component: AppButtonCvComponent;
  let fixture: ComponentFixture<AppButtonCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppButtonCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppButtonCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
