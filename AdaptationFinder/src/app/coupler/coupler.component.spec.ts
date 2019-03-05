import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouplerComponent } from './coupler.component';

describe('CouplerComponent', () => {
  let component: CouplerComponent;
  let fixture: ComponentFixture<CouplerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouplerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
