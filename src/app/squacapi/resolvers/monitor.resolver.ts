import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Monitor } from "../models/monitor";
import { MonitorService } from "../services/monitor.service";

@Injectable({
  providedIn: "root",
})
export class MonitorResolver implements Resolve<Observable<any>> {
  constructor(private monitorService: MonitorService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Monitor> | Observable<Monitor[]> {
    const id = +route.paramMap.get("monitorId");
    if (id) {
      return this.monitorService.read(id).pipe(
        catchError((error) => {
          return this.handleError(error);
        })
      );
    } else {
      return this.monitorService.list().pipe(
        catchError((error) => {
          return this.handleError(error);
        })
      );
      // return all of them
    }
  }

  handleError(error): Observable<any> {
    return of({ error });
  }
}