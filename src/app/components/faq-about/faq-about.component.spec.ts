import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQAboutComponent } from './faq-about.component';

describe('FAQAboutComponent', () => {
  let component: FAQAboutComponent;
  let fixture: ComponentFixture<FAQAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAQAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FAQAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
