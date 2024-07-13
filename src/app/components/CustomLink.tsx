import Link from "next/link";

const CustomLink = ({ ...props }) => {
  return (
    <Link
      className="block text-red-600 break-all hover:text-red-500 transition-colors"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </Link>
  );
};

export default CustomLink;
