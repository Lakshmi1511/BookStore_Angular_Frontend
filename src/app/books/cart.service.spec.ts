import { TestBed } from '@angular/core/testing';

import { bookstoreService } from './bookstore.service';

describe('bookstoreService', () => {
  let service: bookstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(bookstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
