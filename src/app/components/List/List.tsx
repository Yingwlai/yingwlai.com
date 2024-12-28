import { ComponentProps } from "react";

type ListProps = {
  
} & ComponentProps<'ul'>;

const List: React.FC<ListProps> = ({ children, className }) => {
  return (
    <ul className={className}>
      {children}
    </ul>
  );
};

export default List;