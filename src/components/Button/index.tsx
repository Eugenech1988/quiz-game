'use client'
import { FC } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  text: string
}

const Button: FC<ButtonProps> = ({text}) => {
  return (
    <button className={styles.button}>
      {text}
    </button>
  )
}

export default Button;
