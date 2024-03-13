'use client'

import { FC } from 'react';
import styles from './typography.module.scss';
import cx from 'classnames';

interface TypographyProps {
  text: string,
  component: string
}

const Typography: FC<TypographyProps> = ({text, component}) => {
  return (
    <p className={cx({
      [styles.h1]: (component === 'h1'),
      [styles.h3]: (component === 'h3'),
      [styles.h3Varied]: (component === 'h3Varied'),
      [styles.p]: (component === 'p')
    })}>{text}</p>
  )
}

export default Typography;
