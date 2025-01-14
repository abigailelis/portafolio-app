import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSkillsSectionComponent } from './app-skills-section.component';

describe('AppSkillsSectionComponent', () => {
  let component: AppSkillsSectionComponent;
  let fixture: ComponentFixture<AppSkillsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppSkillsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSkillsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
