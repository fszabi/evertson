type StatusType = "Hamarosan" | "Folyamatban" | "Befejeződött";

const statuses: { [key in StatusType]: string } = {
  Hamarosan: "text-blue-400 bg-blue-400/10",
  Folyamatban: "text-yellow-400 bg-yellow-400/10",
  Befejeződött: "text-green-400 bg-green-400/10",
};

const activityItems = [
  {
    id: 1,
    type: "Event típus",
    firstPlacePrize: "1. hely - 1 hetes VIP 1v1 szerveren",
    secondPlacePrize:
      "2. hely - StatTrak™ XM1014 | Teclu Burner (Battle-Scarred)",
    thirdPlacePrize: "3. hely - Charm | Baby's AK",
    status: "" as StatusType,
    server: "1v1",
    time: "2024 október 27 19:00",
    dateTime: "2024-10-27T19:00",
  },
  {
    id: 2,
    type: "Event típus",
    firstPlacePrize: "1. hely - 1 hetes VIP AWP szerveren",
    secondPlacePrize: "2. hely - Charm | Lil' SAS",
    thirdPlacePrize: "3. hely - Sticker | Boom (Holo)",
    status: "" as StatusType,
    server: "AWP",
    time: "2024 november 3 19:00",
    dateTime: "2024-11-03T19:00",
  },
  {
    id: 3,
    type: "Event típus",
    firstPlacePrize: "1. hely - 1 hetes VIP 1v1 szerveren",
    secondPlacePrize: "2. hely - P90 | Vent Rush (Field-Tested)",
    thirdPlacePrize: "3. hely - MAC-10 | Allure (Field-Tested)",
    status: "" as StatusType,
    server: "1v1",
    time: "2024 november 10 19:00",
    dateTime: "2024-11-10T10:00",
  },
  {
    id: 4,
    type: "Event típus",
    firstPlacePrize: "1. hely - 1 hetes VIP AWP szerveren",
    secondPlacePrize: "2. hely - USP-S | Alpine Camo (Minimal Wear)",
    thirdPlacePrize: "3. hely - SSG 08 | Fever Dream (Field-Tested)",
    status: "" as StatusType,
    server: "AWP",
    time: "2024 november 17 19:00",
    dateTime: "2024-11-17T19:00",
  },
  {
    id: 5,
    type: "Event típus",
    firstPlacePrize: "1. hely - 1 hetes VIP 1v1 szerveren",
    secondPlacePrize: "2. hely - M4A1-S | Night Terror (Battle-Scarred)",
    thirdPlacePrize: "3. hely - R8 Revolver | Banana Cannon (Well-Worn)",
    status: "" as StatusType,
    server: "1v1",
    time: "2024 november 24 19:00",
    dateTime: "2024-11-24T19:00",
  },
];

const now = new Date();

const updatedActivityItems = activityItems.map((item) => {
  const eventDate = new Date(item.dateTime);

  if (eventDate > now) {
    item.status = "Hamarosan";
  } else if (
    eventDate.toDateString() === now.toDateString() &&
    eventDate.getTime() <= now.getTime() &&
    now.getTime() <= eventDate.getTime() + 3600000
  ) {
    // Check if the event is happening today and within the current time
    item.status = "Folyamatban";
  } else {
    item.status = "Befejeződött";
  }

  return item;
});

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
            {/* <th
              scope="col"
              className="hidden py-2 pl-4 pr-8 font-semibold min-[370px]:table-cell sm:pl-6 lg:pl-8"
            >
              Típus
            </th> */}
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
          {updatedActivityItems.map((item) => (
            <tr key={item.id}>
              {/* <td className="hidden py-4 pl-4 pr-8 min-[370px]:table-cell sm:pl-6 lg:pl-8">
                <div className="rounded-md w-fit bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                  {item.type}
                </div>
              </td> */}
              <td className="py-4 pr-0 pl-4 text-sm leading-6 text-gray-400 sm:pr-6 sm:pl-6 lg:pl-8">
                {item.server}
              </td>
              <td className="hidden py-4 pl-0 pr-4 lg:table-cell sm:pr-8">
                <div className="font-mono text-sm leading-6 text-gray-400">
                  <p>{item.firstPlacePrize}</p>
                  <p>{item.secondPlacePrize}</p>
                  <p>{item.thirdPlacePrize}</p>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20 md:table-cell">
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                  <div
                    className={classNames(
                      item.dateTime > new Date().toISOString()
                        ? statuses[item.status]
                        : statuses[item.status],
                      "flex-none rounded-full p-1"
                    )}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="text-white">{item.status}</div>
                </div>
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
