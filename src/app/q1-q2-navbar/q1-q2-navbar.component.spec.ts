import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q1Q2NavbarComponent } from './q1-q2-navbar.component';

describe('Q1Q2NavbarComponent', () => {
  let component: Q1Q2NavbarComponent;
  let fixture: ComponentFixture<Q1Q2NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q1Q2NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q1Q2NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
