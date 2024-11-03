import Events from "@/app/(events)/Events";
import CreateEvent from "./CreateEvent";

const CreateEventPage = () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <CreateEvent />
        <Events isAdmin />
      </div>
    </section>
  );
};

export default CreateEventPage;
