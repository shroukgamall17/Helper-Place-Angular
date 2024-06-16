import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmonialsSliderCardsComponent } from './testmonials-slider-cards.component';

describe('TestmonialsSliderCardsComponent', () => {
  let component: TestmonialsSliderCardsComponent;
  let fixture: ComponentFixture<TestmonialsSliderCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestmonialsSliderCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestmonialsSliderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
