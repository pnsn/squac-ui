import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { MonitorService } from "./monitors.service";

describe("MonitorService", () => {
  let service: MonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MonitorService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});