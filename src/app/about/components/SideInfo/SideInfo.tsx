import { ComponentProps } from 'react';

type SideInfoProps = {
  title: string;
} & ComponentProps<'aside'>

const SideInfo: React.FC<SideInfoProps> = ({ title, children }) => {
  return (
    <aside>
      <h3>
        {title}
      </h3>
      {children}
    </aside>
  );
};

export default SideInfo;
