import ExperienceSection from './ExperienceSection/ExperienceSection';
import ExperienceNavigation from './ExperienceNavigation/ExperienceNavigation';
import styles from './Experience.module.css';

import { experiences } from '../../constants/experiences';

const Experience = () => {
  return (
    <section className={styles.container}>
      <ExperienceNavigation />
      <section className={styles['experiences-container']}>
        {experiences.map((experience) => 
          <ExperienceSection
            key={experience.id}
            companyName={experience.companyName}
            positions={experience.positions}
            jobResponsibilities={experience.jobResponsibilites}
          />
        )}
      </section>
    </section>
  );
};

export default Experience;