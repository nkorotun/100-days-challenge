import { useState, useEffect } from "react";
import { Card } from "../Card";
import classes from "./Field.module.css";

export const Field = ({ cards, finish, backSide }) => {
  const [openCards, setOpenCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [lockBoard, setLockBoard] = useState(false);

  useEffect(() => {
    const firstCard = cards[openCards[0]];
    const secondCard = cards[openCards[1]];

    if (secondCard && firstCard.id === secondCard.id) {
      setMatched([...matched, firstCard.id]);
    }

    if (openCards.length === 2) {
      setLockBoard(true);
      setTimeout(() => {
        setOpenCards([]);
        setLockBoard(false);
      }, 300);
    }

    if (matched.length === Math.floor(cards.length / 2)) {
      finish();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, openCards]);

  const handleFlip = (index) => {
    if (openCards.includes(index)) return;
    if (lockBoard) return;
    setOpenCards((opened) => [...opened, index]);
  };

  const restart = () => {
    setOpenCards([]);
    setMatched([]);
    setLockBoard(false);
  };

  useEffect(() => {
    restart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(cards)]);

  return (
    <section className={classes.game}>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            index={index}
            flipCard={openCards.includes(index) || matched.includes(card.id)}
            path={card.path}
            name={card.name}
            backSide={backSide}
            callback={handleFlip}
          />
        );
      })}
    </section>
  );
};
