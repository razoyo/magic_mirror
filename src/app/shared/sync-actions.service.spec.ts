import { TestBed, inject } from '@angular/core/testing';

import { SyncActionsService } from './sync-actions.service';

describe('SyncActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SyncActionsService]
    });
  });

  it('should be created', inject([SyncActionsService], (service: SyncActionsService) => {
    expect(service).toBeTruthy();
  }));
});
