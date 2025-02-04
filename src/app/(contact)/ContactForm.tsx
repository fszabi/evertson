"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const services = [
  "Skin Eladás",
  "Trade-Up",
  "Fogadás",
  "Tanfolyam",
  "Skin Bérlés",
];

const paymentMethods = ["Kriptovaluta", "Revolut", "Banki átutalás"];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nev: "",
    email: "",
    "kozossegi-profil": "",
    "steam-profil": "",
    honnanismersz: "",
    uzenet: "",
    "Skin Eladás": false,
    "Trade-Up": false,
    Fogadás: false,
    Tanfolyam: false,
    "Skin Bérlés": false,
    Kriptovaluta: false,
    Revolut: false,
    "Banki átutalás": false,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // We don't want the page to refresh

    e.preventDefault();
    const formURL = e.currentTarget.action;
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === "boolean" && value) {
        data.append(key, "true");
      } else if (typeof value !== "boolean") {
        data.append(key, value);
      }
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("Hiba");
        }

        return response.json();
      })
      .then((data) => {
        setFormData({
          nev: "",
          email: "",
          "kozossegi-profil": "",
          "steam-profil": "",
          uzenet: "",
          honnanismersz: "",
          "Skin Eladás": false,
          "Trade-Up": false,
          Fogadás: false,
          Tanfolyam: false,
          "Skin Bérlés": false,
          Kriptovaluta: false,
          Revolut: false,
          "Banki átutalás": false,
        });

        toast.success("Amint tudom felveszem veled a kapcsolatot.");
      });
  };

  return (
    <form
      method="POST"
      action="https://www.formbackend.com/f/1e6ed1bc148cbd4d"
      onSubmit={submitForm}
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8">
        <div className="max-[400px]:col-span-2">
          <label
            htmlFor="nev"
            className="block text-sm font-semibold leading-6"
          >
            Név
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="nev"
              id="nev"
              autoComplete="given-name"
              value={formData.nev}
              onChange={handleInput}
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-[#d80001] md:text-sm md:leading-6 transition-shadow"
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
              value={formData.email}
              onChange={handleInput}
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-[#d80001] md:text-sm md:leading-6 transition-shadow"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="kozossegi-profil"
            className="block text-sm font-semibold leading-6"
          >
            Discord név / Facebook profil link
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="kozossegi-profil"
              id="kozossegi-profil"
              value={formData["kozossegi-profil"]}
              onChange={handleInput}
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-[#d80001] md:text-sm md:leading-6 transition-shadow"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="steam-profil"
            className="block text-sm font-semibold leading-6"
          >
            Steam profil link
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="steam-profil"
              id="steam-profil"
              value={formData["steam-profil"]}
              onChange={handleInput}
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-[#d80001] md:text-sm md:leading-6 transition-shadow"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="honnanismersz"
            className="block text-sm font-semibold leading-6"
          >
            Honnan hallottál rólam?
          </label>
          <div className="mt-2.5">
            <textarea
              name="honnanismersz"
              id="honnanismersz"
              value={formData.honnanismersz}
              onChange={handleTextArea}
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-[#d80001] md:text-sm md:leading-6 transition-shadow"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="uzenet"
            className="block text-sm font-semibold leading-6"
          >
            Üzenet
          </label>
          <div className="mt-2.5">
            <textarea
              name="uzenet"
              id="uzenet"
              value={formData.uzenet}
              onChange={handleTextArea}
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset bg-zinc-800 ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-[#d80001] md:text-sm md:leading-6 transition-shadow"
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
                onChange={handleInput}
                checked={(formData as any)[service]}
                className="checkbox checkbox-error bg-zinc-800 border-zinc-700 [--chkbg:#d80001] [--chkfg:white] checked:border-[#d80001] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d80001] hover:border-zinc-700"
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
                onChange={handleInput}
                checked={(formData as any)[paymentMethod]}
                className="checkbox checkbox-error bg-zinc-800 border-zinc-700 [--chkbg:#d80001] [--chkfg:white] checked:border-[#d80001] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d80001] hover:border-zinc-700"
              />
              <label htmlFor={paymentMethod} className="font-medium">
                {paymentMethod}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full font-medium bg-[#d80001] px-4 py-2 rounded-md hover:opacity-70 transition-opacity"
        >
          Küldés
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
