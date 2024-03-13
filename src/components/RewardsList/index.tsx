'use client'

import { FC } from 'react';
import styles from './rewardsList.module.scss';
import cx from 'classnames';

interface RewardsProps {
  rewards: string[],
  questionNumber: number
}

const RewardsList: FC<RewardsProps> = ({rewards, questionNumber}) => {
  const rewardsLength = rewards.length - 1;

  return (
    <ul className={styles.gameRewardsList}>
      {rewards.map((reward, i) => {
        const reversedIndex = rewardsLength - i;
        let state = '';

        if (reversedIndex === questionNumber) {
          state = 'current';
        } else if (reversedIndex < questionNumber) {
          state = 'previous';
        }

        return (
          <li
            className={cx(styles.gameRewardItem, {
              [styles.current]: state === 'current',
              [styles.previous]: state === 'previous'
            })}
            key={reward}
          >
            <span className={styles.topHexagon}/>
            <span className={styles.text}>{reward}</span>
            <span className={styles.bottomHexagon}/>
          </li>
        );
      })}
    </ul>
  );
}

export default RewardsList;
