import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inf132Component } from './inf132.component';

describe('Inf132Component', () => {
  let component: Inf132Component;
  let fixture: ComponentFixture<Inf132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inf132Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inf132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
