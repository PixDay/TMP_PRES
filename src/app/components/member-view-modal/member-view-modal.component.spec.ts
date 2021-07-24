import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberViewModalComponent } from './member-view-modal.component';

describe('MemberViewModalComponent', () => {
  let component: MemberViewModalComponent;
  let fixture: ComponentFixture<MemberViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberViewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
