import classNames from "classnames";
import Image from "next/image";
import { getSkinraveData } from "../utils/getSkinraveData";

const Table = async () => {
  const skinraveData = await getSkinraveData();

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* <select className="px-4 py-2 border-0 bg-inherit min-w-36 bg-zinc-800 rounded-lg ring-1 ring-inset ring-zinc-700 focus:ring-2 focus:ring-inset focus:ring-red-600">
        <option value="Today">Today</option>
        <option value="Yesterday">Yesterday</option>
        <option value="All Time">Last 7 days</option>
      </select> */}

      <p className="px-4 py-2 bg-inherit w-fit bg-zinc-800 rounded-lg ring-1 ring-inset ring-zinc-700">
        Last 7 days
      </p>

      <table className="w-full max-w-5xl bg-zinc-800 rounded-lg">
        <thead>
          <tr className="w-full border-b border-zinc-600">
            <th className="py-3 px-6 text-left">Rank</th>
            <th className="py-3 px-6 text-left">Level</th>
            <th className="py-3 px-6 text-left">Username</th>
            <th className="py-3 px-6 text-left">Avatar</th>
            <th className="py-3 px-6 text-left">Wagered</th>
          </tr>
        </thead>

        <tbody>
          {skinraveData.list.map((affiliate: any, index: number) => (
            <tr className="w-full" key={index}>
              <td className="py-3 px-6">
                <p
                  className={classNames({
                    "size-9 flex justify-center items-center rounded-full":
                      true,
                    "text-zinc-900": index === 0 || index === 1 || index === 2,
                    "bg-[#FFD700]": index === 0,
                    "bg-[#C0C0C0]": index === 1,
                    "bg-[#CD7F32]": index === 2,
                    "bg-zinc-700": index > 2,
                  })}
                >
                  {index + 1}
                </p>
              </td>
              <td className="py-3 px-6">
                <div className="bg-zinc-600 rounded-full size-9 flex justify-center items-center">
                  {affiliate.user.level}
                </div>
              </td>
              <td className="py-3 px-6">{affiliate.user.username}</td>
              <td className="py-3 px-6">
                <Image
                  src={affiliate.user.avatarUrl}
                  alt={affiliate.username}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </td>

              <td className="py-3 px-6">
                <p className="bg-zinc-700 text-green-500 w-fit p-2 rounded-lg">
                  {affiliate.wagered}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
