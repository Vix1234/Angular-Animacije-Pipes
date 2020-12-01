import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePrimjerComponent } from './pipe-primjer.component';

describe('PipePrimjerComponent', () => {
  let component: PipePrimjerComponent;
  let fixture: ComponentFixture<PipePrimjerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipePrimjerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePrimjerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
