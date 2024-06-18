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
      width={800}
      height={500}
      {...props}
    />
  );
};

export default CustomImage;
