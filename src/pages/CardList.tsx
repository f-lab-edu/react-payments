import useCardStorage from '../storage/useCardStorage.ts';
import Card from '../components/Card';
import { useModal } from '../contexts/hooks/useModal.tsx';
import CreateCard from './CreateCard';
import PaymentMain from './PaymentMain';
import { CardType } from '../storage/cardType.ts';
import CreateCardComplete from './CreateCardComplete';

const CardList = () => {
  const { setModal } = useModal();
  const { Cards, removeCard } = useCardStorage();
  const removeHandler = (cardNumber: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    removeCard(cardNumber);
  };
  return (
    <div
      style={{
        padding: '1rem',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>보유카드</div>
        <div onClick={() => setModal(<PaymentMain />)}>X</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        {Cards.map((card: CardType) => (
          <div key={card.cardNumber} style={{ position: 'relative' }}>
            <div>
              <Card
                data={card}
                onClick={() => setModal(<CreateCardComplete card={card} />)}
              />
              <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
                {card.cardAlias}
              </div>
            </div>
            <button
              onClick={() => removeHandler(card.cardNumber)}
              style={{
                position: 'absolute',
                right: '0.75rem',
                top: '0.75rem',
              }}
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
