import styles from '@/app/home.module.scss';
import Image from 'next/image';
import Typography from '@/components/Typography';
import Link from 'next/link';
import Button from '@/components/Button';
import cx from 'classnames';

const EndPage = ({searchParams}) => {
  return (
    <main className={styles.container}>
      <div className={styles.imageSide}>
        <div className={styles.imageContent}>
          <Image src="/hand.svg" alt={'hand'} width={624} height={367}/>
        </div>
      </div>
      <div className={styles.linkSide}>
        <div className={cx(styles.linkContent, styles.endLinkContent)}>
          <div className={styles.textBlock}>
            <Typography
              text="Total score"
              component="h3Varied"
            />
            {searchParams.reward &&
              <Typography
                text={`${searchParams.reward} earned`}
                component="h1"
              />
            }
          </div>
          <Link href={'/gamepage'}>
            <Button text="Try again"/>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default EndPage;
