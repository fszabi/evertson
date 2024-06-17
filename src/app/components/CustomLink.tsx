import Link from "next/link";

const CustomLink = ({ ...props }) => (
  <Link
    className="text-red-600"
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {props.children}
  </Link>
);

export default CustomLink;
