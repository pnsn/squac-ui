import { Pipe, PipeTransform } from "@angular/core";
import { OrganizationService } from "../services";

@Pipe({
  name: "organization",
})
export class OrganizationPipe implements PipeTransform {
  constructor(private orgService: OrganizationService) {}

  transform(value: number): string {
    if (typeof value === "string") {
      return value;
    }
    return this.orgService.getOrgName(value);
  }
}