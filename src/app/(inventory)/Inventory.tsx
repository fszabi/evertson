import Image from "next/image";
import getInventoryImage from "../utils/getInventoryImage";

const Inventory = async () => {
  const inventoryImage = await getInventoryImage();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-14">
      <Image
        className="object-cover shadow rounded-lg w-full h-full"
        width={1500}
        height={1500}
        src={inventoryImage?.imageUrl || ""}
        alt="Raktár képp"
      />
    </div>
  );
};

export default Inventory;
