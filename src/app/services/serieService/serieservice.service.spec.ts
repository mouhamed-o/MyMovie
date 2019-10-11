import { TestBed } from '@angular/core/testing';

import { SerieserviceService } from './serieservice.service';

describe('SerieserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerieserviceService = TestBed.get(SerieserviceService);
    expect(service).toBeTruthy();
  });
});
