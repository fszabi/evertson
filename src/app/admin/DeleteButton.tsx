"use client";

import { useState } from "react";
import { deleteEvent } from "../(events)/actions";
import { deleteServerEvent } from "../(server-events)/actions";

const DeleteButton = ({
  id,
  event,
  serverEvent,
}: {
  id: number;
  event?: boolean;
  serverEvent?: boolean;
}) => {
  const [isPending, setIsPending] = useState(false);

  return (
    <button
      onClick={async () => {
        setIsPending(true);
        if (event) {
          await deleteEvent(id);
        } else if (serverEvent) {
          await deleteServerEvent(id);
        }
        setIsPending(false);
      }}
      disabled={isPending}
      className="w-full font-medium flex items-center justify-center bg-red-600 px-4 py-2 rounded-md hover:bg-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Törlés
    </button>
  );
};

export default DeleteButton;
