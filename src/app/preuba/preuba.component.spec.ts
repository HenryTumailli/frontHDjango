import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreubaComponent } from './preuba.component';

describe('PreubaComponent', () => {
  let component: PreubaComponent;
  let fixture: ComponentFixture<PreubaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreubaComponent]
    });
    fixture = TestBed.createComponent(PreubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
