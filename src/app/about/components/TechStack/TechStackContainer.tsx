import { ComponentProps } from 'react';

import styles from './TechStack.module.css';

type TechStackContainerProps = {
  title: string;
} & ComponentProps<'aside'>

const TechStackContainer: React.FC<TechStackContainerProps> = ({ title, children }) => {
  return (
    <section className={styles['tech-stack-container']}>
      <h3>
        {title}
      </h3>
      {children}
    </section>
  );
};

export default TechStackContainer;
