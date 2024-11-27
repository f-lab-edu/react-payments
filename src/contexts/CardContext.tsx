import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { createStorage } from '../storage/createStorage.ts';
import { CardType } from '../storage/cardType.ts';

const CardContext = createContext({
  Cards: [] as CardType[],
  addCard: (_: CardType): void => undefined,
  removeCard: (_: string): void => undefined,
  getCard: (_: string): CardType | undefined => undefined,
});

const cardStorage = createStorage<CardType[]>('cards');

export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({ children }: PropsWithChildren) => {
  const [Cards, setCards] = useState(() => cardStorage.get());

  const updateCards = (newCards: CardType[]) => {
    cardStorage.set(newCards);
    setCards(newCards);
  };

  const getCard = (cardNumber: string) => {
    return Cards.find((card: CardType) => card.cardNumber === cardNumber);
  };

  const removeCard = (cardNumber: string) => {
    updateCards(
      Cards.filter((card: CardType) => card.cardNumber !== cardNumber)
    );
  };

  const addCard = (card: CardType) => {
    // 중복된 카드가 있다면 교체
    const index = Cards?.findIndex(
      (c: CardType) => c.cardNumber === card.cardNumber
    );
    const newCards = Cards ? [...Cards] : [];
    if (index !== -1) {
      // 기존 배열을 수정하지 않고 새로운 배열 생성
      updateCards([
        ...newCards.slice(0, index),
        card,
        ...newCards.slice(index + 1),
      ]);
    } else {
      updateCards([...newCards, card]); // 새로운 배열 생성
    }
  };

  const contextValue = {
    Cards,
    addCard,
    getCard,
    removeCard,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};
