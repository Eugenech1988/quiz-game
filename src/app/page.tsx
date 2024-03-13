import { FC } from 'react';
import Button from '@/components/Button';
import Typography from '@/components/Typography';
import Image from 'next/image';
import styles from './home.module.scss';
import Link from 'next/link';

const HomePage: FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.imageSide}>
        <div className={styles.imageContent}>
          <Image src="/hand.svg" alt={'hand'} width={624} height={367}/>
        </div>
      </div>
      <div className={styles.linkSide}>
        <div className={styles.linkContent}>
          <div className={styles.textBlock}>
            <Typography
              text="Who wants to be"
              component="h1"
            />
            <Typography
              text="a millionaire?"
              component="h1"
            />
          </div>
          <Link href={'/gamepage'}>
            <Button text="Start"/>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
