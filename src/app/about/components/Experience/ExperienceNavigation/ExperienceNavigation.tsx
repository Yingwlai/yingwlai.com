import { experiences } from '@/app/about/constants/experiences';
import styles from './ExperienceNavigation.module.css';

const ExperienceNavigation = () => {
  return (
    <aside className={styles.container}>
      <nav>
        <ul>
          {experiences.map(experience => 
            <li key={experience.id}>
              {experience.companyName}
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default ExperienceNavigation;