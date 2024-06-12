import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSideBarComponent } from './about-side-bar.component';

describe('AboutSideBarComponent', () => {
  let component: AboutSideBarComponent;
  let fixture: ComponentFixture<AboutSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
