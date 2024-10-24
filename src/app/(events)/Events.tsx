// type StatusType = "Completed" | "Error";

type StatusType = "Hamarosan" | "Folyamatban" | "Befejeződött";

const statuses: { [key in StatusType]: string } = {
  // Completed: "text-green-400 bg-green-400/10",
  // Error: "text-rose-400 bg-rose-400/10",

  Hamarosan: "text-blue-400 bg-blue-400/10",
  Folyamatban: "text-yellow-400 bg-yellow-400/10",
  Befejeződött: "text-green-400 bg-green-400/10",
};

const activityItems = [
  {
    id: 1,
    type: "Event típus",
    prize: "Nyeremény",
    status: "Folyamatban" as StatusType,
    server: "AWP",
    time: "22:06:37",
    dateTime: "2023-01-23T11:00",
  },
  {
    id: 2,
    type: "Event típus",
    prize: "Nyeremény",
    status: "Hamarosan" as StatusType,
    server: "PUB",
    time: "16:02:44",
    dateTime: "2023-01-23T09:00",
  },
  {
    id: 3,
    type: "Event típus",
    prize: "Nyeremény",
    status: "Befejeződött" as StatusType,
    server: "1v1",
    time: "10:16:52",
    dateTime: "2023-01-23T00:00",
  },
  {
    id: 4,
    type: "Event típus",
    prize: "Nyeremény",
    status: "Befejeződött" as StatusType,
    server: "AWP",
    time: "02:05:28",
    dateTime: "2023-01-21T13:00",
  },
  {
    id: 5,
    type: "Event típus",
    prize: "Nyeremény",
    status: "Hamarosan" as StatusType,
    server: "AWP",
    time: "01:01:04",
    dateTime: "2023-01-18T12:34",
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Events = () => {
  return (
    <div className="mt-16">
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
              className="hidden py-2 pl-4 pr-8 font-semibold min-[370px]:table-cell sm:pl-6 lg:pl-8"
            >
              Típus
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
            >
              Nyereményt
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-4 text-right font-semibold md:table-cell sm:pr-8 sm:text-left lg:pr-20"
            >
              Státusz
            </th>
            <th
              scope="col"
              className="py-2 pl-0 max-[369px]:pl-4 pr-8 font-semibold lg:pr-20"
            >
              Szerver
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-6 lg:pr-8"
            >
              Hátralévő idő
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {activityItems.map((item) => (
            <tr key={item.id}>
              <td className="hidden py-4 pl-4 pr-8 min-[370px]:table-cell sm:pl-6 lg:pl-8">
                {/* <div className="truncate text-sm font-medium leading-6 text-white">
                  {item.type}
                </div> */}

                <div className="rounded-md w-fit bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                  {item.type}
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="font-mono text-sm leading-6 text-gray-400">
                  {item.prize}
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20 md:table-cell">
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                  <div
                    className={classNames(
                      statuses[item.status],
                      "flex-none rounded-full p-1"
                    )}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="text-white">{item.status}</div>
                </div>
              </td>
              <td className="py-4 pl-0 max-[369px]:pl-4 pr-8 text-sm leading-6 text-gray-400 lg:pr-20">
                {item.server}
              </td>
              <td className="py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:pr-6 lg:pr-8">
                <time dateTime={item.dateTime}>{item.time}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Events;
