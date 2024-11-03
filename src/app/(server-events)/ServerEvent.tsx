"use client";

import { ServerEventStatusType, ServerEventType } from "@/app/types";
import DeleteButton from "../admin/DeleteButton";
import { updateServerEvent } from "./actions";
import { useEffect } from "react";

const statuses: { [key in ServerEventStatusType]: string } = {
  COMING_SOON: "text-blue-400 bg-blue-400/10",
  ONGOING: "text-yellow-400 bg-yellow-400/10",
  ENDED: "text-green-400 bg-green-400/10",
};

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const ServerEvent = ({
  event,
  isAdmin,
}: {
  event: ServerEventType;
  isAdmin?: boolean;
}) => {
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      now.setHours(now.getHours() + 1);
      const eventDate = new Date(event.date);
      const eventEnd = new Date(event.date);
      eventEnd.setHours(eventEnd.getHours() + 1);

      if (
        event.status === "COMING_SOON" &&
        now >= eventDate &&
        now < eventEnd
      ) {
        updateServerEvent({ status: "ONGOING", id: event.id });
      } else if (event.status === "ONGOING" && now >= eventEnd) {
        updateServerEvent({ status: "ENDED", id: event.id });
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
        {event.server}
      </td>
      <td className="hidden py-4 pl-0 pr-4 lg:table-cell sm:pr-8">
        <div className="font-mono text-sm leading-6 text-gray-400">
          <p>1. hely - {event.first_prize}</p>
          {event.second_prize && <p>2. hely - {event.second_prize}</p>}
          {event.third_prize && <p>3. hely - {event.third_prize}</p>}
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
            {event.status === "COMING_SOON"
              ? "Hamarosan"
              : event.status === "ONGOING"
              ? "Folyamatban"
              : "Befejeződött"}
          </div>
        </div>
      </td>
      <td className="py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:pr-6 lg:pr-8">
        <time dateTime={event.date.toISOString()}>
          {new Date(event.date.getTime() - 60 * 60 * 1000).toLocaleString(
            "hu-HU",
            {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              timeZone: "Europe/Budapest", // Hungarian time zone
            }
          )}
        </time>
      </td>
      {isAdmin && (
        <td>
          <DeleteButton id={event.id} serverEvent />
        </td>
      )}
    </tr>
  );
};

export default ServerEvent;
