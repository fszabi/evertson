import { EventType } from "@/app/types";
import { getServerEvents } from "@/app/utils/getServerEvents";
import ServerEvent from "./ServerEvent";

const ServerEvents = async () => {
  const serverEvents = await getServerEvents();

  console.log(serverEvents);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-14">
      <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">
        Események
      </h2>
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-white/10 text-sm leading-6 text-white">
          <tr>
            <th
              scope="col"
              className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8 lg:pr-20"
            >
              Szerver
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold lg:table-cell"
            >
              Nyeremény
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-4 text-right font-semibold md:table-cell sm:pr-8 sm:text-left lg:pr-20"
            >
              Státusz
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-6 lg:pr-8"
            >
              Időpont
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {serverEvents.map((event: EventType) => (
            <ServerEvent key={event.id} event={event} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServerEvents;
