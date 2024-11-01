import ServerEvents from "../../(server-events)/ServerEvents";
import CreateServerEvent from "./CreateServerEvent";

const CreateServerEventPage = async () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <CreateServerEvent />
        <ServerEvents />
      </div>
    </section>
  );
};

export default CreateServerEventPage;
