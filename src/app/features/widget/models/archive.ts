import { Injectable } from "@angular/core";
import { Adapter } from "@core/models/adapter";

// Describes an archive
export class Archive {
  public value: number;
  constructor(
    public id: number,
    public metricId: number,
    public channelId: number,
    public min: number,
    public max: number,
    public mean: number,
    public median: number,
    public stdev: number,
    public numSamps: number,
    public minabs: number,
    public maxabs: number,
    public starttime: string,
    public endtime: string
  ) {}

  static get modelName() {
    return "Archive";
  }
}

export interface ApiGetArchive {
  channel: number;
  metric: number;
  id: string;
  min: number;
  max: number;
  mean: number;
  median: number;
  stdev: number;
  num_samps: number;
  maxabs: number;
  minabs: number;
  starttime: string;
  endtime: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: "root",
})
export class ArchiveAdapter implements Adapter<Archive> {
  adaptFromApi(item: ApiGetArchive, stat: string): Archive {
    const archive = new Archive(
      +item.id,
      item.metric,
      item.channel,
      item.min,
      item.max,
      item.mean,
      item.median,
      item.stdev,
      item.num_samps,
      item.minabs,
      item.maxabs,
      item.starttime,
      item.endtime
    );
    if (stat) {
      archive.value = item[stat];
    }
    return archive;
  }
}