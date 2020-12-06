import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VjezbaAnimacijaComponent } from './vjezba-animacija.component';

describe('VjezbaAnimacijaComponent', () => {
  let component: VjezbaAnimacijaComponent;
  let fixture: ComponentFixture<VjezbaAnimacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VjezbaAnimacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VjezbaAnimacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
