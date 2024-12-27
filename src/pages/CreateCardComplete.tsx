import { useState } from 'react';
import Card from '../components/Card';
import { CardType } from '../storage/cardType.ts';
import useCardStorage from '../storage/useCardStorage.ts';
import { useModal } from '../contexts/hooks/useModal.tsx';
import CardList from './CardList';
import { colors } from '../constants/color.ts';
import Input from '../components/input/Input.tsx';

interface CreateCardCompleteProps {
  card: CardType;
}

const CreateCardComplete = ({ card }: CreateCardCompleteProps) => {
  const [data, setData] = useState(card);
  const { setModal } = useModal();
  const { addCard } = useCardStorage();
  const addCardHandler = () => {
    addCard(data);
    setModal(<CardList />);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        height: '100%',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div
          style={{
            fontSize: '1.5rem',
            marginTop: '10rem',
            textAlign: 'center',
          }}
        >
          카드 등록이 완료되었습니다.
        </div>
        <div style={{ width: 'fit-content', margin: 'auto' }}>
          <Card data={data} />
        </div>
        <Input
          value={data.cardAlias}
          style={{
            borderBottom: '1px solid #E0E0E0',
            maxWidth: '200px',
            margin: 'auto',
            textAlign: 'center',
          }}
          placeholder="카드 별칭"
          onChange={(v) => setData({ ...data, cardAlias: v.target.value })}
        />
      </div>
      <div className="text-right">
        <button
          style={{ color: colors.mint, width: 'fit-content' }}
          onClick={() => addCardHandler()}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default CreateCardComplete;
