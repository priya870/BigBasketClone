import { TestBed } from '@angular/core/testing';

import { CartQunatityService } from './cart-qunatity.service';

describe('CartQunatityService', () => {
  let service: CartQunatityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartQunatityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
