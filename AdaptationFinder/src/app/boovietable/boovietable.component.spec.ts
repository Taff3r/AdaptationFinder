import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoovietableComponent } from './boovietable.component';

describe('BoovietableComponent', () => {
  let component: BoovietableComponent;
  let fixture: ComponentFixture<BoovietableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoovietableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoovietableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
