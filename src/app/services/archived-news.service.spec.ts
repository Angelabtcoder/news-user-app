import { TestBed } from '@angular/core/testing';

import { ArchivedNewsService } from './archived-news.service';

describe('ArchivedNewsService', () => {
  let service: ArchivedNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivedNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
