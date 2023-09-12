import { TestBed } from '@angular/core/testing';

import { GroceryservicesService } from './groceryservices.service';

describe('GroceryservicesService', () => {
  let service: GroceryservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
