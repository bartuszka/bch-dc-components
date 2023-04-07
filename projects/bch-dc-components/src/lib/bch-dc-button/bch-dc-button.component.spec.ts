import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BchDcButtonComponent } from './bch-dc-button.component';

describe('BchCdButtonComponent', () => {
  let component: BchDcButtonComponent;
  let fixture: ComponentFixture<BchDcButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BchDcButtonComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BchDcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
