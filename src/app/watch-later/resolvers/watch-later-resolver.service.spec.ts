import { TestBed } from '@angular/core/testing';

import { WatchLaterResolverService } from './watch-later-resolver.service';

describe('WatchLaterResolverService', () => {
  let service: WatchLaterResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchLaterResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
