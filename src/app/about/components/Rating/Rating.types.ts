type range5WithoutStep = { value?: 0 | 1 | 2 | 3 | 4 | 5; };

type range5WithStep = { value?: 0.5 | 1.5 | 2.5 | 3.5 | 4.5 | 0 | 1 | 2 | 3 | 4 | 5; };

type range10WithoutStep = { value?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; };

type range10WithStep = { value?: 0.5 | 1.5 | 2.5 | 3.5 | 4.5 | 5.5 | 6.5 | 7.5 | 8.5 | 9.5 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; };

type maxValue5WithoutStep = {
  maxValue: 5;
  step: 0;
};

type maxValue5WithStep = {
  maxValue: 5;
  step: 0.5;
};

type maxValue10WithoutStep = {
  maxValue: 10;
  step: 0;
};

type maxValue10WithStep = {
  maxValue: 10;
  step: 0.5;
};

type BaseRatingProps = {
  skillTitle: string;
};

export type RatingProps = BaseRatingProps & maxValue5WithStep & range5WithStep |
BaseRatingProps & maxValue5WithoutStep & range5WithoutStep |
BaseRatingProps & maxValue10WithStep & range10WithStep |
BaseRatingProps & maxValue10WithoutStep & range10WithoutStep;