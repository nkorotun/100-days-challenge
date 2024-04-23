import backSide from "./assets/icons/avengers.svg";
import { Header } from "./components/Header";
import { Field } from "./components/Field";
import { useCallback, useEffect, useState } from "react";
import { createCards, shuffleCards } from "./utils";
export default function App() {
  const [isGameFinfished, setIsGameFinished] = useState(false);
  const [pairOfCards, setPairOfCards] = useState<any[]>([]);

  const createCardPairs = useCallback(() => {
    const cards = createCards(8);
    const pairs = shuffleCards([...cards, ...cards]);
    return setPairOfCards(pairs);
  }, []);

  useEffect(() => {
    createCardPairs();
  }, [createCardPairs]);

  const restart = () => {
    setIsGameFinished(true);
    createCardPairs();
    setIsGameFinished(false);
  };

  const finishGame = () => {
    setIsGameFinished(true);
  };

  const onTimerFinish = () => {
    setIsGameFinished(true);
    setPairOfCards([]);
  };

  return (
    <div className="App">
      <Header
        key={new Date().getTime() + 1}
        isFinished={isGameFinfished}
        onTimerFinish={onTimerFinish}
        onRestart={restart}
      />
      {!isGameFinfished ? (
        <Field cards={pairOfCards} finish={finishGame} backSide={backSide} />
      ) : pairOfCards.length > 0 ? (
        <div className="message">Congratulations, you win!</div>
      ) : (
        <div className="message_container">
          <span className="message">You failed to find all pairs</span>
          <span className="btn" onClick={restart}>
            Try again
          </span>
        </div>
      )}
    </div>
  );
}
