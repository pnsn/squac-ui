import { TestBed } from "@angular/core/testing";
import { ChannelGroup, ChannelGroupAdapter } from "./channel-group";

describe("ChannelGroup", () => {
  let adapter: ChannelGroupAdapter;

  it("should create an instance", () => {
    expect(new ChannelGroup(1, 1, "test", "description", 1)).toBeTruthy();
  });

  it("should create new channel group from api", () => {
    adapter = TestBed.inject(ChannelGroupAdapter);
    const testData = {
      name: "string",
      id: 1,
      description: "string",
      channels: [],
      created_at: "string",
      updated_at: "string",
      user: 1,
      organization: 1,
      auto_exclude_channels: [],
      auto_include_channels: [],
      share_org: true,
      share_all: false,
    };
    const channelGroup = adapter.adaptFromApi(testData);
    expect(channelGroup).toBeDefined();
    expect(channelGroup.id).toBe(1);
  });

  it("should return api json from channel group", () => {
    adapter = TestBed.inject(ChannelGroupAdapter);
    const testGroup: ChannelGroup = new ChannelGroup(
      1,
      1,
      "testName",
      "description",
      1
    );
    const channelGroupJson = adapter.adaptToApi(testGroup);
    expect(channelGroupJson).toBeDefined();
    expect(channelGroupJson.name).toBe("testName");
  });
});