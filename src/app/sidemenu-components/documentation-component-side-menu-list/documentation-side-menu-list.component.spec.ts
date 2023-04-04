import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationSideMenuListComponent } from './documentation-side-menu-list.component';

describe('ComponentSideMenuListComponent', () => {
  let component: DocumentationSideMenuListComponent;
  let fixture: ComponentFixture<DocumentationSideMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationSideMenuListComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DocumentationSideMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
