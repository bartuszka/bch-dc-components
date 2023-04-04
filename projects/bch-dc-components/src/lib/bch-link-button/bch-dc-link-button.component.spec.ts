import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BchDcLinkButtonComponent } from './bch-dc-link-button.component';

describe('BchLinkButtonComponent', () => {
  let component: BchDcLinkButtonComponent;
  let fixture: ComponentFixture<BchDcLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BchDcLinkButtonComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BchDcLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
