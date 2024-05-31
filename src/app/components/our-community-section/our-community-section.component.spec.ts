import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCommunitySectionComponent } from './our-community-section.component';

describe('OurCommunitySectionComponent', () => {
  let component: OurCommunitySectionComponent;
  let fixture: ComponentFixture<OurCommunitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCommunitySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurCommunitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
