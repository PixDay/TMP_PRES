import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectModalAdminComponent } from './connect-modal-admin.component';

describe('ConnectModalAdminComponent', () => {
  let component: ConnectModalAdminComponent;
  let fixture: ComponentFixture<ConnectModalAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectModalAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectModalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
