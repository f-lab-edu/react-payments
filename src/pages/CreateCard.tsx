import React, { ReactNode, useState } from 'react';
import { useModal } from '../hook/useModal';
import ArrowIcon from '../components/icons/ArrowIcon';
import Card from '../components/Card';
import { cardType } from '../types/cardType';
import SelectCardCompany from '../components/SelectCardCompany';
import useCardStore from '../hook/useCardStore';
import CreateCardComplete from './CreateCardComplete';

const CreateCard = () => {
  const { historyBack, setModal } = useModal();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cardData, setCardData] = useState<cardType>({
    cardCompany: '',
    cardColor: '',
    cardNumber: '',
    userName: '',
    cvcCode: '',
    expiredDate: '',
    cardAlias: '',
    password: '',
  });
  // const { addCard } = useCardStore();

  const companyHandler = (cardCompany: string, cardColor: string) => {
    setCardData({ ...cardData, cardCompany, cardColor });
    setDrawerOpen(false);
  };

  const INPUT_STYLE = 'bg-gray-200 p-3 rounded-md text-mint font-bold';

  const cardnumberHandler = (cardNumber: string) => {
    // 숫자가 아니면 제거
    const sanitizedInput = cardNumber.replace(/[^0-9]/g, '');
    // 문자열을 4개씩 자르기
    const chunks = sanitizedInput.match(/.{1,4}/g) || [];

    // 16자리 이상은 입력 불가
    if (chunks.length > 4) return;

    setCardData({ ...cardData, cardNumber: chunks.join('-') });
  };

  const expiredDateHandler = (date: string) => {
    // 숫자가 아니면 제거
    const sanitizedInput = date.replace(/[^0-9]/g, '');

    // 2자리씩 자르기
    const chunks = sanitizedInput.match(/.{1,2}/g) || [];

    // 4자리 이상은 입력 불가
    if (chunks.length > 2) return;

    setCardData({ ...cardData, expiredDate: chunks.join('/') });
  };

  const cardCvcHandler = (cvcCode: string) => {
    // 숫자가 아니면 제거
    const sanitizedInput = cvcCode.replace(/[^0-9]/g, '');
    // 3자리 이상은 입력 불가
    if (sanitizedInput.length > 3) return;

    setCardData({ ...cardData, cvcCode: sanitizedInput });
  };

  const registerCard = () => {
    // TODO : 데이터 입력 확인 및 유효성 검사 필요
    setModal(<CreateCardComplete card={cardData} />);
    // addCard(cardData);
  };

  return (
    <>
      <SelectCardCompany
        isOpen={drawerOpen}
        setIsOpen={setDrawerOpen}
        selectCallback={companyHandler}
      />
      <div className="p-5">
        <header>
          <button
            onClick={historyBack}
            className="flex items-center justify-center gap-5"
          >
            <ArrowIcon alt="뒤로가기" />
            카드추가
          </button>
        </header>
        <section className="flex flex-col gap-4 mt-5">
          <div className="w-fit m-auto">
            <Card data={cardData} onClick={() => setDrawerOpen(true)} />
          </div>

          <TitleBox title="카드번호">
            <input
              type="text"
              placeholder="카드 번호"
              className={`${INPUT_STYLE} text-center `}
              value={cardData.cardNumber}
              onChange={(v) => cardnumberHandler(v.target.value)}
            />
          </TitleBox>

          <TitleBox title="유효기간">
            <input
              type="text"
              placeholder="유효기간"
              className={`${INPUT_STYLE} w-[100px] text-center`}
              value={cardData.expiredDate}
              onChange={(v) => expiredDateHandler(v.target.value)}
            />
          </TitleBox>

          <TitleBox title="카드소유자">
            <input
              type="text"
              placeholder="카드 소유자"
              className={`${INPUT_STYLE}`}
              value={cardData.userName}
              onChange={(v) =>
                setCardData({ ...cardData, userName: v.target.value })
              }
            />
          </TitleBox>

          <TitleBox title="보안코드(CVC/CVV)">
            <input
              type="password"
              placeholder="CVC/CVV"
              className={`${INPUT_STYLE} w-[100px] text-center`}
              value={cardData.cvcCode}
              onChange={(v) => cardCvcHandler(v.target.value)}
            />
          </TitleBox>

          <TitleBox title="카드 비밀번호">
            <div className="flex gap-3 items-center ">
              <input
                type="password"
                className={`${INPUT_STYLE} w-[50px] text-center`}
                maxLength={1}
              />
              <input
                type="password"
                className={`${INPUT_STYLE} w-[50px] text-center`}
                maxLength={1}
              />
              <div className="w-1 aspect-square rounded-full bg-mint mx-4" />
              <div className="w-1 aspect-square rounded-full bg-mint mx-4" />
            </div>
          </TitleBox>

          <button
            className="bg-mint text-white p-2 rounded-lg"
            onClick={registerCard}
          >
            등록
          </button>
        </section>
      </div>
    </>
  );
};

const TitleBox = ({
  title,
  children,
}: {
  title: ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1">
    <Title>{title}</Title>
    {children}
  </div>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs text-gray-600">{children}</div>
);

export default CreateCard;
