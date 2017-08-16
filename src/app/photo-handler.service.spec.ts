/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotoHandlerService } from './photo-handler.service';

describe('PhotoHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoHandlerService]
    });
  });

  it('should ...', inject([PhotoHandlerService], (service: PhotoHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
