import { TestBed } from '@angular/core/testing';

import { LibExampleService } from './lib-example.service';

describe('LibExampleService', () => {
  let service: LibExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
