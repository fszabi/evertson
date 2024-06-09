"use client";

import { Field, Label, Switch } from "@headlessui/react";
import { useState } from "react";

const services = [
  "Skin Eladás",
  "Trade-Up",
  "Fogadás",
  "Tanfolyam",
  "Skin Bérlés",
];

const paymentMethods = ["Kriptovaluta", "Revolut", "Banki átutalás"];

const ContactForm = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <form action="#" method="POST">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8">
        <div className="max-[400px]:col-span-2">
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6"
          >
            Név
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 md:text-sm md:leading-6 transition-shadow"
            />
          </div>
        </div>
        <div className="max-[400px]:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 md:text-sm md:leading-6 transition-shadow"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="profile"
            className="block text-sm font-semibold leading-6"
          >
            Discord név / Facebook profil link
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="profile"
              id="profile"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 md:text-sm md:leading-6 transition-shadow"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="profile"
            className="block text-sm font-semibold leading-6"
          >
            Steam profil link
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="profile"
              id="profile"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 md:text-sm md:leading-6 transition-shadow"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6"
          >
            Üzenet
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-red-600 md:text-sm md:leading-6 transition-shadow"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="space-y-4 max-[400px]:col-span-2">
          <h3>Szolgáltatások</h3>
          {services.map((service) => (
            <div key={service} className="flex items-center gap-3">
              <input
                id={service}
                name={service}
                value={service}
                type="checkbox"
                className="checkbox checkbox-error bg-zinc-800 border-zinc-700 [--chkbg:theme(colors.red.500)] [--chkfg:white] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:border-zinc-700"
              />
              <label htmlFor={service} className="font-medium">
                {service}
              </label>
            </div>
          ))}
        </div>
        <div className="space-y-4 max-[400px]:col-span-2">
          <h3>Fizetési mód</h3>
          {paymentMethods.map((paymentMethod) => (
            <div key={paymentMethod} className="flex items-center gap-3">
              <input
                id={paymentMethod}
                name={paymentMethod}
                value={paymentMethod}
                type="checkbox"
                className="checkbox checkbox-error bg-zinc-800 border-zinc-700 [--chkbg:theme(colors.red.500)] [--chkfg:white] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:border-zinc-700"
              />
              <label htmlFor={paymentMethod} className="font-medium">
                {paymentMethod}
              </label>
            </div>
          ))}
        </div>
        {/* <Field as="div" className="flex gap-x-4 md:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field> */}
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50"
        >
          Küldés
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
