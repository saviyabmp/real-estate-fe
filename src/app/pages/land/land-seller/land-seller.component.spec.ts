import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandSellerComponent } from './land-seller.component';

describe('LandSellerComponent', () => {
  let component: LandSellerComponent;
  let fixture: ComponentFixture<LandSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
