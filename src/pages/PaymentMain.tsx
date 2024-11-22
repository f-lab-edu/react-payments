import { ReactNode, useState } from 'react';
import { useModal } from '../hook/useModal';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import { cardType } from '../types/cardType';

const DUMMY_CARD: cardType[] = [
  {
    cardCompany: '노드카드',
    cardColor: 'black',
    cardNumber: '1234 1111 1111 1122',
    userName: '홍길동',
    cvcCode: '373',
    expiredDate: '12/11',
    cardAlias: '홈카드',
  },
  {
    cardCompany: '노드카드',
    cardColor: 'red',
    cardNumber: '1234 1111 1111 1122',
    userName: '홍길동',
    cvcCode: '373',
    expiredDate: '12/11',
    cardAlias: '홈카드',
  },
  {
    cardCompany: '노드카드',
    cardColor: 'yellow',
    cardNumber: '1234 1111 1111 1122',
    userName: '홍길동',
    cvcCode: '373',
    expiredDate: '12/11',
    cardAlias: '홈카드',
  },
];

const PaymentMain = () => {
  const { closeModal } = useModal();
  const [isAgree, setIsAgree] = useState(false);

  const purchaseHandler = () => {
    alert('결제가 완료되었습니다.');
    closeModal();
  };

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgree(e.target.checked);
  };

  return (
    <div className="relative p-5 h-full">
      <header>
        <span className="bg-mint text-white px-1 font-bold">MNT</span> Pay{' '}
        <span className="border-l-2 border-mint">결제</span>
      </header>
      <section className="flex flex-col gap-5 mt-5">
        <Box title={'보유카드'}>
          <Carousel>
            {DUMMY_CARD.map((card, i) => (
              <div key={i}>
                <Card data={card} />
                <div className="mt-3">{card.cardAlias}</div>
              </div>
            ))}
            <div>
              <Card onClick={() => alert('1')} />
              <div className="mt-3">신규등록</div>
            </div>
          </Carousel>
        </Box>
        <Box title={'결제금액'}>
          <div className="flex justify-between">
            <UnderLine>총 결제금액</UnderLine>
            <UnderLine>325,600원</UnderLine>
          </div>
        </Box>
        <Box title={'약관 이용 및 동의'}>
          <div className="flex flex-col gap-5 text-xs font-bold">
            <div>
              거래정보 제공 동의 : NEXTSTEP{' '}
              <span className="text-gray-500 underline decoration-gray-500">
                상세보기
              </span>
            </div>
            <div>
              주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
              <input
                type="checkbox"
                className="ml-2"
                checked={isAgree}
                onChange={checkboxHandler}
              />
            </div>
          </div>
        </Box>
      </section>
      <footer className="absolute left-0 bottom-0 w-full grid grid-cols-2 gap-5 p-5">
        <button
          className="w-full h-12 bg-mint text-white"
          onClick={purchaseHandler}
          disabled={!isAgree}
        >
          결제하기
        </button>
        <button
          className="w-full h-12 bg-gray-300 text-white"
          onClick={closeModal}
        >
          취소하기
        </button>
      </footer>
    </div>
  );
};

const Box = ({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) => (
  <div className="w-full">
    <div className="border-b-2 border-gray-200 pb-2">{title}</div>
    <div className="mt-5">{children}</div>
  </div>
);

const UnderLine = ({ children }: { children: ReactNode }) => (
  <div className="relative">
    <div className="absolute bottom-[3px] bg-mint h-1 w-full z-0" />
    <div className="relative z-1 font-bold">{children}</div>
  </div>
);
export default PaymentMain;