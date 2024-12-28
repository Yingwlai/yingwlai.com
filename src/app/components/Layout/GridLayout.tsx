import { ComponentProps } from 'react';

import styles from './GridLayout.module.css';

type GridLayoutProps = {
  width: number;
} & ComponentProps<'section'>;

const GridLayout: React.FC<GridLayoutProps> = ({ width, children }) => {
  const gridClass = `w-${width}`;
  return (
    <section className={`${styles.grid} ${styles[gridClass]}`}>
      {children}
    </section>
  );
};

export default GridLayout