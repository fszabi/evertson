export type StatusType = "COMING_SOON" | "ONGOING" | "ENDED";

export type EventType = {
  id: number;
  server: string;
  first_prize: string;
  second_prize: string;
  third_prize: string;
  status: StatusType;
  date: Date;
};
