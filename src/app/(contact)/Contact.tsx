import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="kapcsolat" className="py-28">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20 px-8">
        <div className="space-y-10">
          <header className="space-y-6">
            <h2>Lépjünk kapcsolatba</h2>
            <p className="text-lg leading-loose text-zinc-300 max-w-lg">
              Ha szeretnéd igénybevenni bármely szolgáltatásomat, akkor keress
              fel az alábbi email címen, vagy töltsd ki a kapcsolatfelvételi
              űrlapot.
            </p>
          </header>
          <Link
            className="flex gap-3 hover:opacity-60 transition-opacity"
            href="mailto:evertson139@gmail.com"
            target="_blank"
          >
            <EnvelopeIcon className="h-6 w-6" />
            evertson139@gmail.com
          </Link>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
