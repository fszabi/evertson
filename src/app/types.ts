export type ServerEventStatusType = "COMING_SOON" | "ONGOING" | "ENDED";

export type EventStatusType = "COMING_SOON" | "ENDED";

export type ServerEventType = {
  id: number;
  server: string;
  first_prize: string;
  second_prize: string | null;
  third_prize: string | null;
  fourth_prize: string | null;
  fifth_prize: string | null;
  status: ServerEventStatusType;
  date: Date;
};

export type EventType = {
  id: number;
  title: string;
  first_prize: string;
  second_prize: string | null;
  third_prize: string | null;
  fourth_prize: string | null;
  fifth_prize: string | null;
  status: EventStatusType;
  deadline: Date;
};

export type FaqType = {
  question: string;
  answer: string | string[];
};
