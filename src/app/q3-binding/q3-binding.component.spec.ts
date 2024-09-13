import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q3BindingComponent } from './q3-binding.component';

describe('Q3BindingComponent', () => {
  let component: Q3BindingComponent;
  let fixture: ComponentFixture<Q3BindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q3BindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q3BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
