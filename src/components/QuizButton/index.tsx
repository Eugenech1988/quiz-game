'use client';

import { FC, useState } from 'react';
import cx from 'classnames';
import styles from './quizButton.module.scss';

interface QuizProps {
  letter: string,
  text: string,
  currentQuestion: object,
  switchToNextQuestion: () => void,
  finishGame: (reward?: string) => void
}

const QuizButton: FC<QuizProps> = ({letter, text, currentQuestion, switchToNextQuestion, finishGame}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  const handleClick = (e: {currentTarget: object, persist: any}) => {
    setSelected(true);

    const letter = e.currentTarget.dataset.letter;
    e.persist();

    setTimeout(() => {
      setSelected(false);

      //@ts-ignore
      (currentQuestion.correct).includes(letter)
        ? handleCorrectAnswer()
        : handleWrongAnswer();
    }, 1000);
  };

  const handleCorrectAnswer = () => {
    setCorrect(true);

    setTimeout(() => {
      switchToNextQuestion();
      setCorrect(false);
    }, 1000);
  };

  const handleWrongAnswer = () => {
    setWrong(true);

    setTimeout(() => {
      finishGame();
    }, 1000);
  };

  let stateClass;

  switch (true) {
    case selected:
      stateClass = 'selected';
      break;
    case correct:
      stateClass = 'correct';
      break;
    case wrong:
      stateClass = 'wrong';
      break;
    default:
      stateClass = '';
  }

  return (
    <button
      className={cx(styles.quizBtn, {
        [styles.wrong]: stateClass === 'wrong',
        [styles.selected]: stateClass === 'selected',
        [styles.correct]: stateClass === 'correct',
      })}
      onClick={handleClick}
      data-letter={letter}
    >
      <span className={styles.topHexagon}/>
      <span className={styles.letter}>{letter}</span>
      <span className={styles.text}>{text}</span>
      <span className={styles.bottomHexagon}/>
    </button>
  );
};

export default QuizButton;
