import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAppSideMenuContentComponent } from './about-app-side-menu-content.component';

describe('AboutAppSideMenuContentComponent', () => {
  let component: AboutAppSideMenuContentComponent;
  let fixture: ComponentFixture<AboutAppSideMenuContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAppSideMenuContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAppSideMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
