const CustomListItem = ({ ...props }) => {
  return (
    <li className="relative pl-5" {...props}>
      <span className="absolute left-0 text-red-600">•</span>
      {/* <Image className="w-8 h-8 absolute left-0" src={crown} alt="crown" /> */}
      {props.children}
    </li>
  );
};

export default CustomListItem;
