import { CandidateDetailsComponent } from './../../candidateCrud/Details/candidate-details/candidate-details.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('CandidateDetailsComponent', () => {
  let component: CandidateDetailsComponent;
  let fixture: ComponentFixture<CandidateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
