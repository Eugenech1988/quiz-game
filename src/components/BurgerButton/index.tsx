'use client';

import React, { FC, useState } from 'react';
import cx from 'classnames';
import styles from './burger.module.scss';

interface BurgerProps {
  setShowRewards: (rewards: boolean) => void
}

const BurgerButton: FC<BurgerProps> = ({ setShowRewards }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen((prev) => !prev);
    //@ts-ignore
    setShowRewards(prev => !prev);
  };

  return (
    <div className={styles.btnWrapper} onClick={handleClick}>
      <div className={cx(styles.btn, {
        [styles.open] : open}
      )}>
        <span/>
        <span/>
        <span/>
      </div>
    </div>
  );
};

export default BurgerButton;
