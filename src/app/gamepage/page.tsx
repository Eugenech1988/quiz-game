'use client';
import { FC, useRef, useState, useCallback } from 'react';
import questions from '@/data/questions.json';
import styles from '@/app/gamepage/game.module.scss';
import Typography from '@/components/Typography';
import QuizButton from '@/components/QuizButton';
import RewardsList from '@/components/RewardsList';
import BurgerButton from '@/components/BurgerButton';
import cx from 'classnames';
import { useRouter, useSearchParams } from 'next/navigation';

const GamePage: FC = () => {
  const [showRewards, setShowRewards] = useState<boolean>(false);
  const [questionNumber, seQuestionNumber] = useState<number>(0);
  const [reward, setReward] = useState<string>('$0');
  const gameLink = useRef(null!);
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentQuestion = questions[questionNumber];

  const prevQuestionReward = questionNumber
  ? questions[questionNumber - 1].reward
  : '$0';

  const switchToNextQuestion = () => {
    if (questionNumber === questions.length - 1) {
      finishGame(questions[questionNumber].reward);
    } else {
      seQuestionNumber(prev => prev + 1);
    }
  };

  const updateReward = (newReward) => {
    setReward(newReward);
  };

  const finishGame = (reward: string = prevQuestionReward) => {
    updateReward(reward);
    //@ts-ignore
    gameLink.current.click()
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )


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
    <button
      type={'button'}
      style={{display: 'none'}}
      ref={gameLink}
      onClick={() => {
        router.push( '/endpage' + '?' + createQueryString('reward', prevQuestionReward));
      }}
    />
  </main>
);
}

export default GamePage;
