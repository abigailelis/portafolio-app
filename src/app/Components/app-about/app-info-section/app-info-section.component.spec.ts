import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInfoSectionComponent } from './app-info-section.component';

describe('AppInfoSectionComponent', () => {
  let component: AppInfoSectionComponent;
  let fixture: ComponentFixture<AppInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppInfoSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
