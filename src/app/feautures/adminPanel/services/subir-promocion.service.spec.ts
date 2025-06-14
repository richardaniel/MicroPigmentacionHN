import { TestBed } from '@angular/core/testing';

import { SubirPromocionService } from './subir-promocion.service';

describe('SubirPromocionService', () => {
  let service: SubirPromocionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubirPromocionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
