import { TestBed } from '@angular/core/testing';

import { PreviewpageService } from './previewpage.service';

describe('PreviewpageService', () => {
  let service: PreviewpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
