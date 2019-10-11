import { TestBed } from '@angular/core/testing';

import { ActorserviceService } from './actorservice.service';

describe('ActorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActorserviceService = TestBed.get(ActorserviceService);
    expect(service).toBeTruthy();
  });
});
