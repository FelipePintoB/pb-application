import { TestBed } from '@angular/core/testing';

import { BingImagesService } from './bing-images.service';

describe('BingImagesService', () => {
  let service: BingImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BingImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
