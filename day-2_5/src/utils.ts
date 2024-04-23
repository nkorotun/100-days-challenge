import { CARD_IMAGES } from "./constants/card-images";

export const createCards = (pairs: number): typeof CARD_IMAGES => {
  const shuffledImages = shuffleCards(CARD_IMAGES).map((item, index) => ({
    ...item,
    id: index,
  }));
  return shuffledImages.slice(0, Math.min(pairs, shuffledImages.length));
};

export const shuffleCards = (array: typeof CARD_IMAGES): typeof CARD_IMAGES => {
  if (!array || !array.length) {
    return [];
  }
  return array.slice().sort(() => Math.random() - 0.5);
};
