import { ComponentProps } from 'react';

import styles from './Rating.module.css';

type RatingLevelProps = {
  ratingValue: number;
  ratingSet: number;
} & ComponentProps<'span'>

export const getFillClass = ({ isHalfRating, isFullRating }: { isHalfRating: boolean, isFullRating: boolean }) : string => {
  return isHalfRating ? styles['half-rating'] : isFullRating ? styles['full-rating'] : '';
};

const RatingLevel: React.FC<RatingLevelProps> = ({ ratingValue, ratingSet }) => {
  const isHalfRating = !Number.isInteger(ratingSet);
  const isFullRating = ratingValue <= ratingSet;

  const fillClassName = getFillClass({ isHalfRating, isFullRating });

  return (
    <span className={`${styles['rating-level']} ${fillClassName}`}></span>
  );
};

export default RatingLevel;