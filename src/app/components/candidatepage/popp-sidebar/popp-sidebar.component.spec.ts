import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoppSidebarComponent } from './popp-sidebar.component';

describe('PoppSidebarComponent', () => {
  let component: PoppSidebarComponent;
  let fixture: ComponentFixture<PoppSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoppSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoppSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
