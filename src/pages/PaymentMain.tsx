import { ReactNode, useState } from 'react';
import { useModal } from '../contexts/hooks/useModal.tsx';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import CreateCard from './CreateCard';
import useCardStorage from '../storage/useCardStorage.ts';
import CardList from './CardList';
import { colors } from '../constants/color.ts';

const PaymentMain = () => {
  const { setModal, closeModal } = useModal();
  const [isAgree, setIsAgree] = useState(false);
  const { Cards } = useCardStorage();

  const purchaseHandler = () => {
    alert('결제가 완료되었습니다.');
    closeModal();
  };

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgree(e.target.checked);
  };

  return (
    <div
      // className="relative p-5 h-full"
      style={{
        position: 'relative',
        height: '100%',
        padding: '1.25rem',
        boxSizing: 'border-box',
      }}
    >
      <header>
        <span
          // className="bg-mint text-white px-1 font-bold"
          style={{
            backgroundColor: colors.mint,
            padding: '4px 0px',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          MNT
        </span>{' '}
        Pay{' '}
        <span
          // className="border-l-2 border-mint"
          style={{
            borderLeft: `2px solid ${colors.mint}`,
          }}
        >
          결제
        </span>
      </header>
      <section
        // className="flex flex-col gap-5 mt-5"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        <Box title={'보유카드'}>
          <Carousel>
            {Cards?.map((card, i) => (
              <div key={i}>
                <Card data={card} onClick={() => setModal(<CardList />)} />
                <div
                  style={{
                    marginTop: '0.75rem',
                  }}
                >
                  {card.cardAlias}
                </div>
              </div>
            ))}
            <div>
              <Card onClick={() => setModal(<CreateCard />)} />
              <div style={{ marginTop: '0.75rem' }}>신규등록</div>
            </div>
          </Carousel>
        </Box>
        <Box title={'결제금액'}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <UnderLine>총 결제금액</UnderLine>
            <UnderLine>325,600원</UnderLine>
          </div>
        </Box>
        <Box title={'약관 이용 및 동의'}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div>
              거래정보 제공 동의 : NEXTSTEP{' '}
              <span style={{ color: '#575757', textDecoration: 'underline' }}>
                상세보기
              </span>
            </div>
            <div>
              주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
              <input
                type="checkbox"
                style={{ marginLeft: '5px' }}
                checked={isAgree}
                onChange={checkboxHandler}
              />
            </div>
          </div>
        </Box>
      </section>
      <footer
        // className="absolute left-0 bottom-0 w-full grid grid-cols-2 gap-5 p-5"
        style={{
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '10px',
          padding: '10px',
          boxSizing: 'border-box',
        }}
      >
        <button
          // className="w-full h-12 bg-mint text-white"
          style={{
            width: '100%',
            height: '40px',
            backgroundColor: colors.mint,
            color: 'white',
          }}
          onClick={purchaseHandler}
          disabled={!isAgree}
        >
          결제하기
        </button>
        <button
          // className="w-full h-12 bg-gray-300 text-white"
          style={{
            width: '100%',
            height: '40px',
            backgroundColor: '#e2e8f0',
            color: 'white',
          }}
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
  <div style={{ width: '100%' }}>
    <div
      style={{
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '10px',
      }}
    >
      {title}
    </div>
    <div style={{ marginTop: '20px' }}>{children}</div>
  </div>
);

const UnderLine = ({ children }: { children: ReactNode }) => (
  <div style={{ position: 'relative' }}>
    <div
      style={{
        position: 'absolute',
        bottom: '3px',
        backgroundColor: colors.mint,
        height: '1px',
        width: '100%',
        zIndex: '0',
      }}
    />
    <div style={{ position: 'relative', zIndex: '1', fontWeight: 'bold' }}>
      {children}
    </div>
  </div>
);
export default PaymentMain;
