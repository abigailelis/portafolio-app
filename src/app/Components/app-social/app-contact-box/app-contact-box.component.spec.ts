import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactBoxComponent } from './app-contact-box.component';

describe('AppContactBoxComponent', () => {
  let component: AppContactBoxComponent;
  let fixture: ComponentFixture<AppContactBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppContactBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContactBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
