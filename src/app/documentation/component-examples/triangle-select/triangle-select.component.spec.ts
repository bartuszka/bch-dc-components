import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleSelectComponent } from './triangle-select.component';

describe('TriangleSelectComponent', () => {
  let component: TriangleSelectComponent;
  let fixture: ComponentFixture<TriangleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriangleSelectComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(TriangleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
