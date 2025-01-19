import RatingLevel from './RatingLevel';
import { RatingProps } from './Rating.types';
import styles from './Rating.module.css';

const Rating: React.FC<RatingProps> = ({ value = 0, maxValue = 5, skillTitle }) => {
  return (
    <section>
      <h3>{skillTitle}</h3>
      <div className={styles['rating-level-container']}>
        {Array.from({ length: maxValue }).map((_, index) => { console.log('returning _', _); return <RatingLevel key={index} ratingValue={index} ratingSet={value} /> })}
      </div>
    </section>
  );
};

export default Rating;