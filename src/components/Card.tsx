import { CardType } from '../storage/cardType.ts';

interface CardProps {
  data?: CardType;
  onClick?: () => void;
}
const Card = ({ data, onClick }: CardProps) => {
  // 카드번호 별표 처리
  const cardNumberMasked = (cardNumber: string) => {
    // 공백으로 나누고 맨 앞 2개의 블록은 유지, 나머지는 *로 변경
    const blocks = cardNumber.split(' ');
    return blocks.map((block, index) => (index < 2 ? block : '****')).join(' ');
  };

  return (
    <div
      className={`flex flex-col justify-between w-[208px] h-[130px] rounded-lg p-2.5 text-[#575757] text-[14px] shadow-md shadow-gray-400 ${onClick ? 'cursor-pointer' : ''}`}
      style={{ backgroundColor: data ? data.cardColor : '#d5d5d5' }}
      onClick={onClick}
    >
      {data ? (
        <>
          <div className="text-left">{data.cardCompany}</div>
          <div className={`w-10 h-[26px] rounded bg-[#cbba64]`} />
          <div className="text-center">{cardNumberMasked(data.cardNumber)}</div>
          <div className="flex justify-between">
            <div>{data.userName}</div>
            <div>{data.expiredDate}</div>
          </div>
        </>
      ) : (
        <div className="m-auto text-3xl font-bold">+</div>
      )}
    </div>
  );
};

export default Card;
