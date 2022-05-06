import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleComponent } from './capsule.component';

describe('CapsuleComponent', () => {
  let component: CapsuleComponent;
  let fixture: ComponentFixture<CapsuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
