export type ServerEventStatusType = "COMING_SOON" | "ONGOING" | "ENDED";

export type EventStatusType = "COMING_SOON" | "ENDED";

export type ServerEventType = {
  id: number;
  server: string;
  first_prize: string;
  second_prize: string;
  third_prize: string;
  status: ServerEventStatusType;
  date: Date;
};

export type EventType = {
  id: number;
  title: string;
  first_prize: string;
  second_prize: string;
  third_prize: string;
  status: EventStatusType;
  deadline: Date;
};

export type FaqType = {
  question: string;
  answer: string | string[];
};
