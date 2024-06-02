import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHelpersComponent } from './slider-helpers.component';

describe('SliderHelpersComponent', () => {
  let component: SliderHelpersComponent;
  let fixture: ComponentFixture<SliderHelpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderHelpersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderHelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
