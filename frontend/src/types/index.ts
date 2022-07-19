export interface FeedbackType {
  id: number;
  name: string;
  feedback: {
    study: string;
    speak: string;
    etc: string;
  };
}

export interface LevellogType {
  content: string;
}

export type ImageSizeType = 'HUGE' | 'LARGE' | 'MEDIUM' | 'SMALL';

export interface InterviewTeamType {
  id: string;
  teamImage: string;
  hostId: string;
  title: string;
  place: string;
  startAt: string;
  participants: ParticipantType[];
}

export interface ParticipantType {
  id: string;
  levellogId: string;
  nickname: string;
  profileUrl: string;
}
