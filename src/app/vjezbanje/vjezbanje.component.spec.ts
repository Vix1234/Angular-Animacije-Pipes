import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VjezbanjeComponent } from './vjezbanje.component';

describe('VjezbanjeComponent', () => {
  let component: VjezbanjeComponent;
  let fixture: ComponentFixture<VjezbanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VjezbanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VjezbanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
