import useCardStore from '../hook/useCardStore';
import Card from '../components/Card';
import { useModal } from '../hook/useModal';
import CreateCard from './CreateCard';
import PaymentMain from './PaymentMain';
import { cardType } from '../types/cardType';
import CreateCardComplete from './CreateCardComplete';

const CardList = () => {
  const { setModal } = useModal();
  const { Cards, removeCard } = useCardStore();
  const removeHandler = (cardNumber: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    removeCard(cardNumber);
    setModal(<CardList />);
  };
  return (
    <div className="p-5 h-full overflow-y-auto">
      <div className="flex justify-between">
        <div>보유카드</div>
        <div onClick={() => setModal(<PaymentMain />)}>X</div>
      </div>
      <div className="flex flex-col gap-5 items-center p-5">
        {Cards.map((card: cardType) => (
          <div key={card.cardNumber} className="relative">
            <div>
              <Card
                data={card}
                onClick={() => setModal(<CreateCardComplete card={card} />)}
              />
              <div className="text-center mt-3">{card.cardAlias}</div>
            </div>
            <button
              onClick={() => removeHandler(card.cardNumber)}
              className="absolute right-3 top-3 "
            >
              삭제
            </button>
          </div>
        ))}
        <Card onClick={() => setModal(<CreateCard />)} />
      </div>
    </div>
  );
};

export default CardList;
