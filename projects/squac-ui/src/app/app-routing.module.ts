import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "@core/components/auth/auth.component";
import { AuthGuard } from "@core/guards/auth.guard";
import { LoggedInGuard } from "@core/guards/logged-in.guard";
import { PasswordResetComponent } from "@user/components/password-reset/password-reset.component";
import { LoginComponent } from "@user/components/login/login.component";
import { UserEditComponent } from "@user/components/user-edit/user-edit.component";
import { UserResolver } from "@core/resolvers/user.resolver";
import { OrganizationResolver } from "@core/resolvers/organization.resolver";
import { NotFoundComponent } from "@core/components/not-found/not-found.component";
import { HomeComponent } from "@core/components/home/home.component";

const appRoutes: Routes = [
  {
    path: "password_reset/confirm",
    redirectTo: "login/password-reset",
    pathMatch: "full",
  },
  {
    path: "login",
    component: AuthComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: "",
        component: LoginComponent,
      },
      {
        path: "password-reset",
        component: PasswordResetComponent,
      },
    ],
  },
  {
    path: "signup",
    component: AuthComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: "",
        component: UserEditComponent,
      },
    ],
  },
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    resolve: {
      user: UserResolver,
      organizations: OrganizationResolver,
    },
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboards",
      },
      {
        path: "dashboards",
        loadChildren: () =>
          import("@dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "channel-groups",
        loadChildren: () =>
          import("@channelGroup/channel-group.module").then(
            (m) => m.ChannelGroupModule
          ),
      },
      {
        path: "metrics",
        loadChildren: () =>
          import("@metric/metric.module").then((m) => m.MetricModule),
      },
      {
        path: "user",
        loadChildren: () =>
          import("@user/user.module").then((m) => m.UserModule),
      },
      {
        path: "monitors",
        loadChildren: () =>
          import("@monitor/monitor.module").then((m) => m.MonitorModule),
      },
      { path: "not-found", component: NotFoundComponent, pathMatch: "full" },
      { path: "**", redirectTo: "not-found" },
    ],
  },
  // Currently overrides the child components - will need to rethink
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      relativeLinkResolution: "corrected",
      paramsInheritanceStrategy: "always",
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}