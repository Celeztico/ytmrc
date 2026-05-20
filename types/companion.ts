export type VideoState = {
  title: string;
  author: string;
  album: string;
  thumbnails: {
    url: string;
  }[];
  durationSeconds: number;
};

export type PlayerState = {
  videoProgress: number;
  volume: number;
  muted: boolean;
  adPlaying: boolean;
};

export type CompanionState = {
  video: VideoState;
  player: PlayerState;
};