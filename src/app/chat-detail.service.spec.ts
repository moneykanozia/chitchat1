import { TestBed } from '@angular/core/testing';

import { ChatDetailService } from './chat-detail.service';

describe('ChatDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatDetailService = TestBed.get(ChatDetailService);
    expect(service).toBeTruthy();
  });
});
