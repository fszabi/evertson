import Image from "next/image";
import crown from "/public/assets/images/blog/tradeguide/crown.webp";

const CustomListItem = ({ ...props }) => {
  return <li className="relative pl-11">{props.children}</li>;
};

export default CustomListItem;
