import { FC, ComponentProps } from 'react';

import styles from './ExperienceSection.module.css';

type ExperienceSectionProps = {
  companyName: string;
  positions: {
    id: string;
    title: string;
    timePeriod: string;
  }[];
  jobResponsibilities: string[];
} & ComponentProps<'article'>;

const ExperienceSection: FC<ExperienceSectionProps> = ({ companyName, positions, jobResponsibilities }) => {
  return (
    <article className={styles.container}>
      <h2>{companyName}</h2>
      {positions.map((position =>
        <section key={position.id} className={styles['position-container']}>
          <p>{position.title}</p>
          <time>{position.timePeriod}</time>
        </section>
      ))}
      <ul>
        {jobResponsibilities.map(responsibility => <li key={responsibility}>{responsibility}</li>)}
      </ul>
    </article>
  );
};

export default ExperienceSection;