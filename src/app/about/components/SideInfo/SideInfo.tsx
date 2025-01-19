import { ComponentProps } from 'react';

import styles from './SideInfo.module.css';

type SideInfoProps = {
  title: string;
} & ComponentProps<'aside'>

const SideInfo: React.FC<SideInfoProps> = ({ title, children, className }) => {
  return (
    <aside className={`${styles.aside} ${className}`}>
      <h3>
        {title}
      </h3>
      {children}
    </aside>
  );
};

export default SideInfo;
