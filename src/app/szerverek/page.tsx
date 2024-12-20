import Header3 from "../(header)/Header3";
import Hero2 from "../(hero)/Hero2";
import Rules from "./(rules)/Rules";
import ScrollArrow from "../ScrollArrow";
import Servers from "./(servers)/Servers";
import ServerEvents from "../(server-events)/ServerEvents";

const ServersPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

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
