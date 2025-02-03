import Header3 from "../(header)/Header3";
import ServerEvents from "../(server-events)/ServerEvents";
import ScrollArrow from "../ScrollArrow";
import Rules from "./(rules)/Rules";
import Servers from "./(servers)/Servers";

const ServersPage = async () => {
  return (
    <>
      <Header3 />
      <Servers />
      <ServerEvents />
      <Rules />
      <ScrollArrow />
    </>
  );
};

export default ServersPage;
