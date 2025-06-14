import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirPromocionComponent } from './subir-promocion.component';

describe('SubirPromocionComponent', () => {
  let component: SubirPromocionComponent;
  let fixture: ComponentFixture<SubirPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirPromocionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
