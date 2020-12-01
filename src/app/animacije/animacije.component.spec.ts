import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacijeComponent } from './animacije.component';

describe('AnimacijeComponent', () => {
  let component: AnimacijeComponent;
  let fixture: ComponentFixture<AnimacijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimacijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
