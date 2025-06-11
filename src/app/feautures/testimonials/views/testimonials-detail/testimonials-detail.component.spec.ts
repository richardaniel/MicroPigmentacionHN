import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsDetailComponent } from './testimonials-detail.component';

describe('TestimonialsDetailComponent', () => {
  let component: TestimonialsDetailComponent;
  let fixture: ComponentFixture<TestimonialsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
