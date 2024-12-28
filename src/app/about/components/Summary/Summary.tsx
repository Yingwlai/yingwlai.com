import styles from './Summary.module.css'

import CurrentTech from '../CurrentTech/CurrentTech';
import Rating from '../Rating/Rating';

const Summary = () => {
  return (
    <section className={styles.container}> 
      <CurrentTech />
      <section className={styles.summary}>
        <h1>About Page</h1>
      </section>
      <aside className={styles.aside}>
        <h2>Skill level</h2>
        <Rating step={0} value={4} maxValue={10} />
      </aside>
    </section>
  );
};

export default Summary;
