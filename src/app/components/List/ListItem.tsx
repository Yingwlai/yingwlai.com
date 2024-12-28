import { ComponentProps } from "react";

type ListItemProps = {
  
} & ComponentProps<'li'>;

const ListItem: React.FC<ListItemProps> = ({ children, className }) => {
  return (
    <li className={className}>
      {children}
    </li>
  )
};

export default ListItem;
