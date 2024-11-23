import { CardType } from './cardType.ts';
import { createStorage } from './createStorage.ts';
import { useSyncExternalStore } from 'react';

const cardStorage = createStorage<CardType[]>('cards');
let cards = cardStorage.get();
let listeners: Set<() => void> = new Set();
const cardStore = {
  set(value: CardType[]) {
    cardStorage.set(value);
    cards = cardStorage.get();
    listeners.forEach((listener) => listener());
  },
  getSnapshot() {
    return cards;
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

const useCardStorage = () => {
  const Cards = useSyncExternalStore(
    cardStore.subscribe,
    cardStore.getSnapshot
  );

  const getCard = (cardNumber: string) => {
    return Cards.find((card: CardType) => card.cardNumber === cardNumber);
  };

  const removeCard = (cardNumber: string) => {
    cardStore.set(
      Cards.filter((card: CardType) => card.cardNumber !== cardNumber)
    );
  };

  const addCard = (card: CardType) => {
    // 중복된 카드가 있다면 교체
    const index = Cards.findIndex(
      (c: CardType) => c.cardNumber === card.cardNumber
    );
    const newCards = [...Cards];
    if (index !== -1) {
      // 기존 배열을 수정하지 않고 새로운 배열 생성
      cardStore.set([
        ...newCards.slice(0, index),
        card,
        ...newCards.slice(index + 1),
      ]);
    } else {
      cardStore.set([...newCards, card]); // 새로운 배열 생성
    }
  };

  return {
    Cards,
    getCard,
    removeCard,
    addCard,
  };
};

export default useCardStorage;
