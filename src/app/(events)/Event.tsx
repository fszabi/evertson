"use client";

import { EventStatusType, EventType } from "@/app/types";
import DeleteButton from "../admin/DeleteButton";
import { updateEvent } from "./actions";
import { useEffect } from "react";

const statuses: { [key in EventStatusType]: string } = {
  COMING_SOON: "text-blue-400 bg-blue-400/10",
  ENDED: "text-green-400 bg-green-400/10",
};

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Event = ({ event, isAdmin }: { event: EventType; isAdmin?: boolean }) => {
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      now.setHours(now.getHours() + 1);
      const eventDate = new Date(event.deadline);

      if (event.status === "COMING_SOON" && now >= eventDate) {
        updateEvent({ status: "ENDED", id: event.id });
      }
    };

    // Check immediately
    checkStatus();

    // Set up interval to check every minute
    const intervalId = setInterval(checkStatus, 60000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []);

  return (
    <tr>
      <td className="py-4 pr-0 pl-4 text-sm leading-6 text-gray-400 sm:pr-6 sm:pl-6 lg:pl-8">
        {event.title}
      </td>
      <td className="hidden py-4 pl-0 pr-4 lg:table-cell sm:pr-8">
        <div className="font-mono text-sm leading-6 text-gray-400">
          <p>1. hely - {event.first_prize}</p>
          {event.second_prize && <p>2. hely - {event.second_prize}</p>}
          {event.third_prize && <p>3. hely - {event.third_prize}</p>}
          {event.fourth_prize && <p>4. hely - {event.fourth_prize}</p>}
          {event.fifth_prize && <p>5. hely - {event.fifth_prize}</p>}
        </div>
      </td>
      <td className="hidden py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20 md:table-cell">
        <div className="flex items-center justify-end gap-x-2 sm:justify-start">
          <div
            className={classNames(
              statuses[event.status],
              "flex-none rounded-full p-1"
            )}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-current" />
          </div>
          <div className="text-white">
            {event.status === "COMING_SOON" ? "Hamarosan" : "Befejeződött"}
          </div>
        </div>
      </td>
      <td className="py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:pr-6 lg:pr-8">
        <time dateTime={event.deadline.toISOString()}>
          {new Date(event.deadline.getTime() - 60 * 60 * 1000).toLocaleString(
            "hu-HU",
            {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              timeZone: "Europe/Budapest", // Hungarian time zone
            }
          )}
        </time>
      </td>
      {isAdmin && (
        <td>
          <DeleteButton id={event.id} event />
        </td>
      )}
    </tr>
  );
};

export default Event;
