import { cardType } from '../types/cardType';
const STORAGE_KEY = 'cards';
const useCardStore = () => {
  const Cards: cardType[] = (() => {
    const cards = localStorage.getItem(STORAGE_KEY);
    return cards ? JSON.parse(cards) : [];
  })();

  const getCard = (cardNumber: string) => {
    const cards = Cards;
    return cards.find((card: cardType) => card.cardNumber === cardNumber);
  };

  const removeCard = (cardNumber: string) => {
    const cards = Cards;
    const newCards = cards.filter(
      (card: cardType) => card.cardNumber !== cardNumber
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCards));
  };

  const addCard = (card: cardType) => {
    const cards = Cards;
    // 중복된 카드가 있다면 교체
    const index = cards.findIndex(
      (c: cardType) => c.cardNumber === card.cardNumber
    );
    if (index !== -1) {
      cards[index] = card;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
      return;
    }

    cards.push(card);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  };

  return { Cards, getCard, addCard, removeCard };
};

export default useCardStore;
