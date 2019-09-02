import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandBuyerComponent } from './land-buyer.component';

describe('LandBuyerComponent', () => {
  let component: LandBuyerComponent;
  let fixture: ComponentFixture<LandBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
