import { Injectable } from "@angular/core";
import { Adapter } from "@core/models/adapter";

// Rules for building channel groups
export class MatchingRule {
  constructor(
    public id: number,
    public owner: number,
    public channelGroupId: number,
    public isInclude: boolean
  ) {}
  networkRegex: string;
  stationRegex: string;
  locationRegex: string;
  channelRegex: string;
}

export interface ApiGetMatchingRule {
  id?: number;
  network_regex?: string;
  station_regex?: string;
  location_regex?: string;
  channel_regex?: string;
  created_at?: string;
  updated_at?: string;
  user: number;
  group: number;
  is_include: boolean;
  url: string;
}

export interface ApiPostMatchingRule {
  network_regex?: string;
  station_regex?: string;
  location_regex?: string;
  channel_regex?: string;
  group: number;
  is_include: boolean;
}

@Injectable({
  providedIn: "root",
})
export class MatchingRuleAdapter implements Adapter<MatchingRule> {
  adaptFromApi(item: ApiGetMatchingRule): MatchingRule {
    const matchingRule = new MatchingRule(
      item.id,
      item.user,
      item.group,
      item.is_include
    );

    matchingRule.channelRegex = item.channel_regex;
    matchingRule.networkRegex = item.network_regex;
    matchingRule.locationRegex = item.location_regex;
    matchingRule.stationRegex = item.station_regex;

    return matchingRule;
  }

  adaptToApi(item: MatchingRule): ApiPostMatchingRule {
    return {
      group: item.channelGroupId,
      network_regex: item.networkRegex,
      station_regex: item.stationRegex,
      location_regex: item.locationRegex,
      channel_regex: item.channelRegex,
      is_include: item.isInclude,
    };
  }
}