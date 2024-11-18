import { cardType } from '../types/cardType';

interface CardProps {
  data: cardType;
}
const Card = ({ data }: CardProps) => {
  // 카드번호 별표 처리
  const cardNumberMasked = (() => {
    // 공백으로 나누고 맨 앞 2개의 블록은 유지, 나머지는 *로 변경
    const blocks = data.cardNumber.split(' ');
    return blocks.map((block, index) => (index < 2 ? block : '****')).join(' ');
  })();

  return (
    <div
      className="flex flex-col justify-between w-[208px] h-[130px] rounded-lg p-2.5 text-[#575757] text-[14px] shadow-md shadow-gray-400"
      style={{ backgroundColor: data.cardColor }}
    >
      <div>{data.cardCompany}</div>
      <div className={`w-10 h-[26px] rounded bg-[#cbba64]`} />
      <div className="text-center">{cardNumberMasked}</div>
      <div className="flex justify-between">
        <div>{data.userName}</div>
        <div>{data.expiredDate}</div>
      </div>
    </div>
  );
};

export default Card;
