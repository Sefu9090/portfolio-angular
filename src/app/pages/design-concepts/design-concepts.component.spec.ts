import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignConceptsComponent } from './design-concepts.component';

describe('DesignConceptsComponent', () => {
  let component: DesignConceptsComponent;
  let fixture: ComponentFixture<DesignConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignConceptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
