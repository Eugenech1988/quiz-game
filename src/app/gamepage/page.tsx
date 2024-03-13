'use client';
import { useRef, useState } from 'react';
import questions from '@/data/questions.json';
import styles from '@/app/gamepage/game.module.scss';
import Typography from '@/components/Typography';
import QuizButton from '@/components/QuizButton';
import RewardsList from '@/components/RewardsList';
import BurgerButton from '@/components/BurgerButton';
import cx from 'classnames';
import Link from 'next/Link';

const GamePage = () => {
  const [showRewards, setShowRewards] = useState<boolean>(false);
  const [questionNumber, seQuestionNumber] = useState<number>(0);
  const [reward, setReward] = useState<string>('$0');
  const gameLink = useRef(null);

  const currentQuestion = questions[questionNumber];

  const prevQuestionReward = questionNumber
  ? questions[questionNumber - 1].reward
  : '$0';

const switchToNextQuestion = () => {
  if (questionNumber === questions.length - 1) {
    finishGame(reward);
  } else {
    seQuestionNumber(prev => prev + 1);
  }
};

const finishGame = (reward: string = prevQuestionReward) => {
  setReward(reward);
  gameLink.current.click();
  // setGameStarted(false);
  // setGameFinished(true);
};
return (
  <main className={styles.game}>
    <div className={styles.gameInner}>
      <div className={styles.gameTitle}>
        <Typography component="h3" text={currentQuestion.question}/>
      </div>

      <div className={styles.gameAnswers}>
        {currentQuestion.answers.map((item) => {
            return (
              <QuizButton
                key={item.letter}
                letter={item.letter}
                text={item.text}
                currentQuestion={currentQuestion}
                switchToNextQuestion={switchToNextQuestion}
                finishGame={finishGame}
              />
            );
          }
        )
        }
      </div>
    </div>
    <div className={cx(styles.gameOverlay, {
      [styles.open]: (showRewards)
    })}>
      <aside className={styles.gameRewards}>
        <RewardsList
          rewards={questions.map((item) => item.reward).reverse()}
          questionNumber={questionNumber}
        />
      </aside>
    </div>
    <BurgerButton setShowRewards={setShowRewards} />
    <Link sx={{display: 'none'}} ref={gameLink} href={{
      pathname: '/endpage',
      query: { reward: reward }
    }}/>
  </main>
);
}

export default GamePage;
