import styles from './Summary.module.css'

import TechStack from '../TechStack/TechStack';
import Introduction from '../Introduction/Introduction';
import SkillLevel from '../SkillLevel/SkillLevel';

const Summary = () => {
  return (
    <section className={styles.container}> 
      <TechStack />
      <Introduction />
      <SkillLevel />
    </section>
  );
};

export default Summary;
