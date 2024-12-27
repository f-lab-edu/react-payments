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
      style={{
        backgroundColor: data ? data.cardColor : '#d5d5d5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '208px',
        height: '130px',
        padding: '12.5px',
        textAlign: 'left',
        color: '#575757',
        fontSize: '14px',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick}
    >
      {data ? (
        <>
          <div style={{ textAlign: 'left' }}>{data.cardCompany}</div>
          <div
            style={{
              width: '40px',
              height: '26px',
              backgroundColor: '#cbba64',
              borderRadius: '4px',
            }}
          />
          <div style={{ textAlign: 'center' }}>
            {cardNumberMasked(data.cardNumber)}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>{data.userName}</div>
            <div>{data.expiredDate}</div>
          </div>
        </>
      ) : (
        <div
          style={{
            margin: 'auto',
            fontSize: '32px',
            fontWeight: 'bold',
          }}
        >
          +
        </div>
      )}
    </div>
  );
};

export default Card;
