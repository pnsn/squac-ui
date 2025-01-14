import { ResourceModel } from "../interfaces";
import {
  WriteOnlyGroupSerializer,
  ReadOnlyGroupDetailSerializer,
  ReadOnlyGroupSerializer,
  Channel as ApiChannel,
} from "@pnsn/ngx-squacapi-client";
import { Channel } from "../models";

export interface ChannelGroup {
  name: string;
  description: string;
  shareAll: boolean;
  shareOrg: boolean;
  channelsCount: number;
  channels?: Channel[];
  autoIncludeChannels?: Channel[];
  autoExcludeChannels?: Channel[];
}
/**
 * Describes a channel group object
 */
export class ChannelGroup extends ResourceModel<
  ReadOnlyGroupDetailSerializer | ReadOnlyGroupSerializer | ChannelGroup,
  WriteOnlyGroupSerializer
> {
  /**
   * @returns model name
   */
  static get modelName(): string {
    return "ChannelGroup";
  }

  /** @override */
  override fromRaw(
    data: ReadOnlyGroupDetailSerializer | ReadOnlyGroupSerializer | ChannelGroup
  ): void {
    super.fromRaw(data);

    if ("channels" in data && data.channels) {
      this.channels = data.channels.map(
        (c: ApiChannel | Channel) => new Channel(c)
      );
    }
    if ("auto_exclude_channels" in data && data.auto_exclude_channels) {
      this.autoExcludeChannels = [...data.auto_exclude_channels].map(
        (c: ApiChannel) => new Channel(c)
      );
    }

    if ("auto_include_channels" in data && data.auto_include_channels) {
      this.autoIncludeChannels = [...data.auto_include_channels].map(
        (c: ApiChannel) => new Channel(c)
      );
    }
  }

  /** @override */
  toJson(): WriteOnlyGroupSerializer {
    const incl = this.autoIncludeChannels?.map((c: Channel): number => c.id);
    const ex = this.autoExcludeChannels?.map((c: Channel) => c.id);

    return {
      name: this.name,
      description: this.description,
      organization: this.orgId,
      auto_exclude_channels: ex ?? [],
      auto_include_channels: incl ?? [],
      share_org: this.shareOrg,
      share_all: this.shareAll,
    };
  }
}
