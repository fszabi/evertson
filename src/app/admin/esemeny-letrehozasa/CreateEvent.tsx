"use client";

import { useRef } from "react";
import CreateButton from "../CreateButton";
import createEvent from "./actions";

const CreateEvent = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await createEvent(formData);
        ref.current?.reset();
      }}
      className="space-y-5"
    >
      <div className="flex max-sm:flex-col gap-5">
        <input
          className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 md:text-sm md:leading-6 transition-shadow"
          type="text"
          placeholder="Cím"
          id="title"
          name="title"
          required
        />
        <input
          className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 md:text-sm md:leading-6 transition-shadow"
          type="date"
          lang="hu-HU"
          id="deadline"
          name="deadline"
          required
        />
      </div>
      <input
        className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 md:text-sm md:leading-6 transition-shadow"
        type="text"
        placeholder="1. hely"
        id="prize-first"
        name="prize-first"
        required
      />
      <input
        className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 md:text-sm md:leading-6 transition-shadow"
        type="text"
        placeholder="2. hely"
        id="prize-second"
        name="prize-second"
      />
      <input
        className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 md:text-sm md:leading-6 transition-shadow"
        type="text"
        placeholder="3. hely"
        id="prize-third"
        name="prize-third"
      />
      <CreateButton />
    </form>
  );
};

export default CreateEvent;
