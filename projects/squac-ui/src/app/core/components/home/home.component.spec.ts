import { MatSidenavModule } from "@angular/material/sidenav";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { MessageService } from "../projects/squac-ui/src/app/core/services/message.service";
import { AppModule } from "../projects/squac-ui/src/app/app.module";
import { MockBuilder, MockInstance, MockRender, ngMocks } from "ng-mocks";
import { MenuComponent } from "../menu/menu.component";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  ngMocks.faster();
  MockInstance.scope();

  beforeAll(() => {
    return MockBuilder(
      [HomeComponent, AppModule],
      [RouterTestingModule.withRoutes([])]
    )
      .mock(MatSidenavModule)
      .mock(MessageService)
      .mock(MenuComponent)
      .provide({
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: {},
          },
        },
      });
  });

  it("should create", () => {
    const fixture = MockRender(HomeComponent);
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });
});