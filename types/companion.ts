export type VideoState = {
  title: string;
  author: string;
  album: string;
  thumbnails: {
    url: string;
  }[];
};

export type PlayerState = {
  volume: number;
  muted: boolean;
  adPlaying: boolean;
};

export type CompanionState = {
  video: VideoState;
  player: PlayerState;
};