import { TestBed, inject } from '@angular/core/testing';

import { TaskerService } from './tasker.service';

describe('TaskerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskerService]
    });
  });

  it('should be created', inject([TaskerService], (service: TaskerService) => {
    expect(service).toBeTruthy();
  }));
});
