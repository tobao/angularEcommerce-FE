import { TestBed } from '@angular/core/testing';

import { BaoToShopFormService } from './bao-to-shop-form.service';

describe('BaoToShopFormService', () => {
  let service: BaoToShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaoToShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
