import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeToastComponent } from './coffee-toast.component';

describe('CoffeeToastComponent', () => {
  let component: CoffeeToastComponent;
  let fixture: ComponentFixture<CoffeeToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
