import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableJobSliderComponent } from './available-job-slider.component';

describe('AvailableJobSliderComponent', () => {
  let component: AvailableJobSliderComponent;
  let fixture: ComponentFixture<AvailableJobSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableJobSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableJobSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
