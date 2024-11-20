"use client";

import { useEdgeStore } from "@/lib/edgestore";
import { startTransition, useState } from "react";
import toast from "react-hot-toast";
import { replaceInventoryImage } from "./actions";

const ChangeInventoryImage = () => {
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0);
  const { edgestore } = useEdgeStore();

  const onUpload = async () => {
    if (file) {
      const res = await edgestore.inventoryImages.upload({
        file,
        onProgressChange: (progress) => {
          setProgress(progress);
        },
      });

      const url = res.url;

      startTransition(() => {
        replaceInventoryImage({
          imageUrl: url,
        }).then((data) => {
          if (data.success) {
            toast.success(data.success);
            setProgress(0);
          }
        });
      });
    }
  };

  return (
    <div className="w-fit mx-auto space-y-4">
      <div className="flex gap-4">
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 w-full h-full"
            multiple={false}
            onChange={(e) => {
              setFile(e.target.files?.[0]);
            }}
          />
          <div className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 md:text-sm md:leading-6 transition-shadow">
            <span>{file ? file.name : "Kép kiválasztása"}</span>
          </div>
        </div>
        <button
          className="font-medium bg-red-600 px-4 py-2 rounded-md hover:bg-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onUpload}
        >
          Feltöltés
        </button>
      </div>
      <div className="h-[6px] w-full bg-zinc-700 border border-zinc-400 rounded-full overflow-hidden">
        <div
          className="h-full bg-zinc-50 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ChangeInventoryImage;
