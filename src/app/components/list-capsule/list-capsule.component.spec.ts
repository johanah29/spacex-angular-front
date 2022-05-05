import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCapsuleComponent } from './list-capsule.component';

describe('ListCapsuleComponent', () => {
  let component: ListCapsuleComponent;
  let fixture: ComponentFixture<ListCapsuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCapsuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
