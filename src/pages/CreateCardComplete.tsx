import { useState } from 'react';
import Card from '../components/Card';
import { cardType } from '../types/cardType';
import useCardStore from '../hook/useCardStore';
import { useModal } from '../hook/useModal';
import CardList from './CardList';

interface CreateCardCompleteProps {
  card: cardType;
}
const CreateCardComplete = ({ card }: CreateCardCompleteProps) => {
  const [data, setData] = useState<cardType>(card);
  const { setModal } = useModal();
  const { addCard } = useCardStore();
  const addCardHandler = () => {
    addCard(data);
    setModal(<CardList />);
  };
  return (
    <div className="relative flex flex-col gap-5 p-5 h-full justify-between">
      <div className="flex flex-col gap-10">
        <div className="text-lg mt-10 text-center">
          카드 등록이 완료되었습니다.
        </div>
        <div className="w-fit m-auto">
          <Card data={data} />
        </div>
        <input
          value={data.cardAlias}
          className="border-b border-gray-300 max-w-[200px] m-auto text-center"
          placeholder="카드 별칭"
          onChange={(v) => setData({ ...data, cardAlias: v.target.value })}
        />
      </div>
      <div className="text-right">
        <button className="text-mint w-fit" onClick={() => addCardHandler()}>
          확인
        </button>
      </div>
    </div>
  );
};

export default CreateCardComplete;
