import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreConnectionsHomeSectionComponent } from './more-connections-home-section.component';

describe('MoreConnectionsHomeSectionComponent', () => {
  let component: MoreConnectionsHomeSectionComponent;
  let fixture: ComponentFixture<MoreConnectionsHomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreConnectionsHomeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreConnectionsHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
