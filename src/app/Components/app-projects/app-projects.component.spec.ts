import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProjectsComponent } from './app-projects.component';

describe('AppProjectsComponent', () => {
  let component: AppProjectsComponent;
  let fixture: ComponentFixture<AppProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
