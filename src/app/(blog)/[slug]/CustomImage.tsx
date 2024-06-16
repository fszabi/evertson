import Image from "next/image";

const CustomImage = ({ ...props }) => {
  if (!props.src) {
    return null;
  }

  return (
    <Image
      className="rounded-lg border border-zinc-800 shadow"
      src={props.src}
      alt={props.alt || "Image"}
      width={1000}
      height={1000}
      {...props}
    />
  );
};

export default CustomImage;
